// my-awesome-reporter.ts
import { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';

class MyReporter implements Reporter {
  constructor(options: { customOption?: string } = {}) {
    console.log(`my-awesome-reporter setup with customOption set to ${options.customOption}`);
  }

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  // onTestBegin(test: TestCase) {
  //   console.log(`Starting test ${test.title}`);
  // }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`${result.status} -> ${test.title}: testResult.stdout: ${result.stdout}`);
  }

  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;