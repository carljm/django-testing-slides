<!SLIDE>

# Testing documentation #

<!SLIDE incremental>

## "We have always been at war with doctests" ##

* Not entirely fair.

* Doctests are great.

* For testing documentation examples.

<!SLIDE incremental>

# You have Sphinx docs. #

* Right?

<!SLIDE incremental>

## You have API code examples. ##

## In your Sphinx docs. ##

<!SLIDE>

# in any test file #

    @@@ python
    def load_tests(loader, tests, ignore):
        path = os.path.join(
            settings.BASE_PATH,
            "docs",
            "examples.rst",
            )

        tests.addTests(
            doctest.DocFileSuite(path))

        return tests

<!SLIDE incremental>

# Your examples are tested! #

* Please don't abuse this.

* Keep them documentation first.
