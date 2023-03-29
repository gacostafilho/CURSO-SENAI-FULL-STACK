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

            //Arrange - Preparação
            double pNum = 2;
            double sNum = 1;
            double rNum = 3;

            //Act - Ação
            var resultado = Calculadora.Somar(pNum, sNum);

            //Assert - Verificações
            Assert.Equal(resultado, rNum);
        }

        //Arrange - Preparação
        [Theory]
        [InlineData(1, 1, 2)]
        [InlineData(2, 2, 4)]
        [InlineData(2, 3, 5)]

        public void XUnitSomarDoisNumerosLista(double pNum, double sNum, double rNum)
        {
            //Act - Ação
            var resultado = Calculadora.Somar(pNum, sNum);


            //Assert - Verificações
            Assert.Equal(resultado, rNum);
        }
    }
}