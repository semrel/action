const core = require('@actions/core');
const semanticRelease = require('semantic-release');

const run = async () => {
  try {
    const { nextRelease } = await semanticRelease();
    core.exportVariable('RELEASE_VERSION', nextRelease.version);
  } catch (error) {
    core.setFailed(error);
  }
};

run();
