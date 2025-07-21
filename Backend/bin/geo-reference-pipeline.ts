#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GeoReferencePipelineStack } from '../lib/geo_reference_pipeline_stack';

const app = new cdk.App();
new GeoReferencePipelineStack(app, 'GeoReferencePipelineStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});