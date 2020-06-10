package Runner;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

//@RunWith(Cucumber.class)
@CucumberOptions(
        //feature file location
        features = {"src/test/java/Features/"},
        //step file location
        glue = {"Steps"},
        //rende leggibile la console
        monochrome = true,
        dryRun = false,

        //taggare quale Feature da runnare (@Staging ad esempio sopra feature o sopra il singolo scenario)
        tags = {},
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:TestReports/LastReport.html"}


)
public class TestRunner extends AbstractTestNGCucumberTests {

}
