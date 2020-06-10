package Steps;

import Base.BaseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

import java.util.concurrent.TimeUnit;

public class Hook extends BaseUtil {

    private BaseUtil base;

    //generate - constructor (lo fa lui stesso)
    public Hook(BaseUtil base) {
        this.base = base;
    }

  /*  @Before
    public void InizializeTest () {

        System.out.println("open the browser: sfari");

        String GECKO_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/geckodriver.exe";
        String CHROME_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/chromedriver.exe";


        // System.setProperty("webdriver.gecko.driver", GECKO_DRIVER_DIRECTORY);
       // System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_DIRECTORY);


       // base.Driver = new FirefoxDriver();
       // base.Driver = new ChromeDriver();
        base.Driver = new SafariDriver();
        base.Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        base.Driver.manage().window().maximize();
        base.Driver.manage().deleteAllCookies();

    }

   @BeforeTest
   @Parameters("browser")
    public void InitializeTest(String browser) throws Exception{
        if(browser.equalsIgnoreCase("Firefox")){
            System.out.println("open the browser: firefox");
            String GECKO_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/geckodriver.exe";
            System.setProperty("webdriver.gecko.driver", GECKO_DRIVER_DIRECTORY);
            base.Driver = new FirefoxDriver();
        }
        else if (browser.equalsIgnoreCase("Chrome")){
            System.out.println("open the browser: chrome");
            String CHROME_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/chromedriver.exe";
            System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_DIRECTORY);
            base.Driver = new ChromeDriver();
        }
        else if (browser.equalsIgnoreCase("Safari")){
            base.Driver = new SafariDriver();
        }
        else {
            throw new Exception("Browser is not correct");
        }
        base.Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        base.Driver.manage().window().maximize();
        base.Driver.manage().deleteAllCookies();
    }

 /*    public void InitializeTestFirefox() throws Exception{
        System.out.println("open the browser: firefox");
        String GECKO_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/geckodriver.exe";
        System.setProperty("webdriver.gecko.driver", GECKO_DRIVER_DIRECTORY);
        base.Driver = new FirefoxDriver();
        base.Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        base.Driver.manage().window().maximize();
        base.Driver.manage().deleteAllCookies();
        }

    public void InitializeTestChrome() throws Exception{
        System.out.println("open the browser: chrome");
        String CHROME_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/java/BrowserDrivers/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_DIRECTORY);
        base.Driver = new ChromeDriver();
        base.Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        base.Driver.manage().window().maximize();
        base.Driver.manage().deleteAllCookies();
    }

   @Before
    @BeforeTest
        public void primadeltest() throws Exception {
           // InitializeTest("Firefox");
        InitializeTestChrome();
           // InitializeTest("Safari");
    }
    @Before
    @BeforeTest
    public void primadeltest2() throws Exception {
        InitializeTestFirefox();
        // InitializeTest("Chrome");
        // InitializeTest("Safari");
    }

    @After
    @AfterTest
    public void TearDownTest () {
        System.out.println("close the browser");
        base.Driver.quit();
    }*/
}
