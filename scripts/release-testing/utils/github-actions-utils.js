#!/usr/bin/env node
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const chalk = require('chalk');
const fetch = require('node-fetch');
const {execSync: exec} = require('child_process');

let ciHeaders;
let jobs;
let baseTemporaryPath;

async function initialize(
  ciToken /*: string */,
  baseTempPath /*: string */,
  branchName /*: string */,
  useLastSuccessfulPipeline /*: boolean */ = false,
) {
  console.info('Getting GHA information');
  baseTemporaryPath = baseTempPath;

  // ciHeaders = {'Circle-Token': ciToken};

  // exec(`mkdir -p ${baseTemporaryPath}`);
  // const pipeline = await (
  //   useLastSuccessfulPipeline ? _getLastSuccessfulPipeline : _getLatestPipeline
  // )(branchName);
  // const testsWorkflow = await _getTestsWorkflow(pipeline.id);
  // const jobsResults = await _getCircleCIJobs(testsWorkflow.id);

  // jobs = jobsResults.flatMap(j => j);
}

function downloadArtifact(
  artifactURL /*: string */,
  destination /*: string */,
) {
  exec(`rm -rf ${destination}`);
  exec(`curl ${artifactURL} -Lo ${destination}`);
}

async function artifactURLForJSCRNTesterAPK(
  emulatorArch /*: string */,
) /*: Promise<string> */ {
  // return _findUrlForJob(
  //   'test_android',
  //   `rntester-apk/jsc/debug/app-jsc-${emulatorArch}-debug.apk`,
  // );
}

async function artifactURLForHermesRNTesterAPK(
  emulatorArch /*: string */,
) /*: Promise<string> */ {
  // return _findUrlForJob(
  //   'test_android',
  //   `rntester-apk/hermes/debug/app-hermes-${emulatorArch}-debug.apk`,
  // );
}

async function artifactURLForMavenLocal() /*: Promise<string> */ {
  // return _findUrlForJob('build_npm_package', 'maven-local.zip');
}

async function artifactURLHermesDebug() /*: Promise<string> */ {
  // return _findUrlForJob('build_hermes_macos-Debug', 'hermes-ios-debug.tar.gz');
}

async function artifactURLForReactNative() /*: Promise<string> */ {
  let shortCommit = exec('git rev-parse HEAD', {silent: true})
    .toString()
    .trim()
    .slice(0, 9);
  // return _findUrlForJob(
  //   'build_npm_package',
  //   `react-native-1000.0.0-${shortCommit}.tgz`,
  // );
}

function baseTmpPath() /*: string */ {
  return baseTemporaryPath;
}



module.exports = {
  initialize,
  downloadArtifact,
  artifactURLForJSCRNTesterAPK,
  artifactURLForHermesRNTesterAPK,
  artifactURLForMavenLocal,
  artifactURLHermesDebug,
  artifactURLForReactNative,
  baseTmpPath,
}
