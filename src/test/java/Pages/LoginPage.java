package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    //constructor di LoginPAge
    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //"how = How.NAME" è il modo che userò per trovare l'elemento, "using" il valore

    @FindBy(how = How.NAME, using = "UserName")
    public WebElement txtUserName;

    @FindBy(how = How.NAME, using = "Password")
    public WebElement txtPassword;

    @FindBy(how = How.NAME, using = "Login")
    public WebElement btnLogin;




    // dopo aver identificato ed esplicitato gli elementi della pagina (WebElement)
    // istanzio i metodi per fare le azioni sulla pagina e le interazioni con gli elementi

    public void Login (String userName, String password) {

        txtUserName.sendKeys(userName);
        txtPassword.sendKeys(password);

    }

    public void ClickLogin () {

        btnLogin.submit();
    }

}
