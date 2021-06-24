const core = require('@actions/core');
const semanticRelease = require('semantic-release');

const run = async () => {
  try {
    const result = await semanticRelease();
    console.log(result);
    if (result && result.nextRelease && result.nextRelease.version) {
      core.exportVariable('RELEASE_VERSION', result.nextRelease.version);
    }
  } catch (error) {
    core.setFailed(error);
  }
};

run();
