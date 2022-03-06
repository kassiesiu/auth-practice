#!/bin/bash

ROOT=`pwd`

cd $ROOT/backend/ ; docker build -t backend .
cd $ROOT/frontend/ ; docker build -t frontend .

cd $ROOT ; docker-compose up