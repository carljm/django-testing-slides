<!SLIDE>

# In-browser testing #

.notes More and more functionality depends on both JS and server. Needs to be tested too.

<!SLIDE incremental>

## Is easier than you think. ##

* Especially in Django 1.4.

* `pip install selenium`

* `LiveServerTestCase`

<!SLIDE smaller>


    @@@ python
    from django.test import LiveServerTestCase
    from selenium.webdriver.firefox.webdriver import WebDriver

    class MySeleniumTests(LiveServerTestCase):

        @classmethod
        def setUpClass(cls):
            cls.selenium = WebDriver()
            super(MySeleniumTests, cls).setUpClass()

        @classmethod
        def tearDownClass(cls):
            super(MySeleniumTests, cls).tearDownClass()
            cls.selenium.quit()

        def test_login(self):
            self.selenium.get(
                "%s%s" % (self.live_server_url, "/login/"))
            username_input = self.selenium.find_element_by_name(
                "username")
            username_input.send_keys("myuser")
            password_input = self.selenium.find_element_by_name(
                "password")
            password_input.send_keys("secret")
            self.selenium.find_element_by_xpath(
                '//input[@value="Log in"]').click()


.notes LiveServerTestCase runs the development server in a separate thread.
