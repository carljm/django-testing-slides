<!SLIDE incremental>

# It's easy to change. #

* unittest2 discovery
* `TEST_RUNNER` setting

.notes The hipsters like nose or py.test, but unittest2 gets the job done.

<!SLIDE small>

    @@@ python
    class DiscoveryRunner(DjangoTestSuiteRunner):
        """A test suite runner using unittest2 discovery."""
        def build_suite(self, test_labels, **kwargs):

            suite = None
            discovery_root = settings.TEST_DISCOVERY_ROOT

            if test_labels:
                suite = defaultTestLoader.loadTestsFromNames(
                    test_labels)

            if suite is None:
                suite = defaultTestLoader.discover(
                    discovery_root,
                    top_level_dir=settings.BASE_PATH,
                    )

            return reorder_suite(suite, (TestCase,))

.notes (Enhanced version in the code online with the slides.)

<!SLIDE small>

# `settings.py` #

    @@@ python
    import os.path
    
    BASE_PATH = os.path.dirname(os.path.dirname(__file__))
    
    TEST_DISCOVERY_ROOT = os.path.join(BASE_PATH, "tests")
    
    TEST_RUNNER = "tests.runner.DiscoveryRunner"

<!SLIDE incremental>

# \o/ #

* Discovers tests wherever you want them.
* Doesn't run tests from external apps by default.
* Flexible specification of specific tests to run: Python dotted path to test
  module, not Django app label.
* ``./manage.py test tests.quotes.test_views``

<!SLIDE incremental>

# Maybe in 1.5? #

* https://code.djangoproject.com/ticket/17365

.notes django-nose is good too, but this could actually go in Django.
