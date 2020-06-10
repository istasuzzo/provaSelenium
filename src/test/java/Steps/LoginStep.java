package Steps;

import Base.BaseUtil;
import Pages.LoginPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;



@Test
public class LoginStep extends BaseUtil {

    private BaseUtil base;

    //generate - constructor
    public LoginStep(BaseUtil base) {
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("step1");
        base.Driver.navigate().to("http://www.executeautomation.com/demosite/Login.html");
    }


    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {

        Thread.sleep(2000);
        LoginPage page = new LoginPage(base.Driver);
        page.ClickLogin();
    }

    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable {

        Thread.sleep(2000);

       Assert.assertEquals("its not displayed", base.Driver.findElement(By.id("Initial")).isDisplayed(), true);
    }


    @And("^I enter the following for Login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {

        // create an ArrayList
        List<User> users = new ArrayList<User>();

        // store all the users
        users = table.asList(User.class);

        LoginPage page = new LoginPage(base.Driver);

        for (User user: users) {
            page.Login(user.username, user.password);

        }

    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterAnd(String userName, String passWord) throws Throwable {
        System.out.println("the UserName is " + userName);
        System.out.println("the PassWord is " + passWord);
    }





    public class User
    {
        public String username;
        public String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;
        }
    }

}
