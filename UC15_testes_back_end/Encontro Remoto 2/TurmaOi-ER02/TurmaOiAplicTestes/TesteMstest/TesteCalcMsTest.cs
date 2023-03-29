using PFS_Turma11_ProjTeste;

namespace TesteMsTest
{
    [TestClass]
    public class TesteCalcMstest
    {
        [TestMethod]
        public void TestMethod1()
        {
            //3A

            //Arrange - Prepara��o
            double pNum = 2; 
            double sNum = 1;
            double rNum = 3;

            //Act - A��o
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verifica��es
            Assert.AreEqual(resultado, rNum);
        }

        //Arrange - Prepara��o
        [DataTestMethod]
        [DataRow(2, 1, 3)]
        [DataRow(2, 2, 4)]
        [DataRow(2, 5, 7)]

        public void TesteSomarDoisNumerosLista(double pNum, double sNum, double rNum)
        {
            //Act - A��o
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verifica��es
            Assert.AreEqual(resultado, rNum);
        }
        
    }
}