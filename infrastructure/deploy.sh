#!/bin/bash

aws cloudformation --region us-east-2 create-stack --stack-name portfolio2024 --template-body file://../../infrastructure/sample-vpc.yaml --parameters "ParameterKey=EnvironmentName,ParameterValue=dev"