#!/usr/bin/env bash

npm run build
aws s3 sync build/ s3://atom-y001-manual
