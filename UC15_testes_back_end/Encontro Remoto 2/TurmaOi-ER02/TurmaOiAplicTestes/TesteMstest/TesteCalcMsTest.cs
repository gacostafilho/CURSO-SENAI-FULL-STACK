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

            //Arrange - Preparação
            double pNum = 2; 
            double sNum = 1;
            double rNum = 3;

            //Act - Ação
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verificações
            Assert.AreEqual(resultado, rNum);
        }

        //Arrange - Preparação
        [DataTestMethod]
        [DataRow(2, 1, 3)]
        [DataRow(2, 2, 4)]
        [DataRow(2, 5, 7)]

        public void TesteSomarDoisNumerosLista(double pNum, double sNum, double rNum)
        {
            //Act - Ação
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verificações
            Assert.AreEqual(resultado, rNum);
        }
        
    }
}