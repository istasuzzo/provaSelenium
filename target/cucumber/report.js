$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "This feature deals with the login functionality of the application",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 44405573,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkState(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat Steps.HookChrome.InitializeTestChrome(HookChrome.java:86)\n\tat Steps.HookChrome.primadeltest(HookChrome.java:96)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:100)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:646)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:811)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1137)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:753)\n\tat org.testng.TestRunner.run(TestRunner.java:607)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:368)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:402)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 148043,
  "error_message": "java.lang.NullPointerException\n\tat Steps.HookChrome.TearDownTest(HookChrome.java:105)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:100)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:646)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:811)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1137)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:753)\n\tat org.testng.TestRunner.run(TestRunner.java:607)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:368)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:402)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});}});