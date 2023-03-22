package teste.senai;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class teste_curso_senai {
	
	private WebDriver driver;
	
	@Before
	public void ConfigurarTeste() {
		System.setProperty("webdriver.chrome.driver","C:\\Program Files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
		
	@Test
	public void TesteNavegabilidade() {
		this.driver.get("https://online.sp.senai.br/");
		driver.findElement(By.id("Busca1_txtFiltro")).sendKeys("Excel");
		//driver.findElement(By.id("Busca_txtFiltro")).sendKeys(Keys.ENTER);
		driver.findElement(By.id("Busca1_btnBusca")).click();
	}
}