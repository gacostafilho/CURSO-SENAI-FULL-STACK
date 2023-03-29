using PFS_Turma11_ProjTeste;
using System;

namespace TesteXUnit
{
    public class TestCalcXUnit
    {
        [Fact]
        public void SomarDoisNumeros()
        {
            //3A

            //Arrange - Prepara��o
            double pNum = 2;
            double sNum = 1;
            double rNum = 3;

            //Act - A��o
            var resultado = Calculadora.Somar(pNum, sNum);

            //Assert - Verifica��es
            Assert.Equal(resultado, rNum);
        }

        //Arrange - Prepara��o
        [Theory]
        [InlineData(1, 1, 2)]
        [InlineData(2, 2, 4)]
        [InlineData(2, 3, 5)]

        public void XUnitSomarDoisNumerosLista(double pNum, double sNum, double rNum)
        {
            //Act - A��o
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verifica��es
            Assert.Equal(resultado, rNum);
        }
    }
}