#!/usr/bin/env bash

set -euo pipefail

if [[ -z "${S3_BUCKET:-}" ]]; then
    echo "error: S3_BUCKET is required" >&2
    exit 1
fi

if [[ -z "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
    echo "error: CLOUDFRONT_DISTRIBUTION_ID is required" >&2
    exit 1
fi

script_dir="$(cd "$(dirname "$0")" && pwd)"
root_dir="$(dirname "$script_dir")"
cd "$root_dir"

if [[ "${SKIP_BUILD:-0}" != "1" ]]; then
    pnpm build
fi

aws s3 sync dist "s3://${S3_BUCKET}" \
    --delete \
    --exclude "*" --include "assets/*" \
    --cache-control "public, max-age=31536000, immutable" \
    --only-show-errors

aws s3 sync dist "s3://${S3_BUCKET}" \
    --delete \
    --exclude "assets/*" \
    --cache-control "public, max-age=300" \
    --only-show-errors

echo "Uploaded dist/ to s3://${S3_BUCKET}"

aws cloudfront create-invalidation \
    --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*" \
    --query "Invalidation.{Id:Id,Status:Status}" \
    --output table

echo "Done."
