using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTests
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            Assert.IsFalse(false);
        }
        
        [TestMethod]
        public void TestMethod2()
        {
            Assert.IsTrue(true);
        }
    }
}