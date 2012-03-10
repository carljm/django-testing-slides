<!SLIDE incremental>

# *Unit* testing views is hard. #

* Views have many collaborators / dependencies.

* Templates, database, middleware, url routing...

* Write less view code!

.notes Views have access to everything, so code in views is easy to write but
hard to maintain and debug.

<!SLIDE>

# If you unit test views #

* Use `RequestFactory`.

* Call the view callable directly.

* Set up dependencies explicitly (e.g. `request.user`, `request.session`).


<!SLIDE>

    @@@ python
    def test_change_locale(self):
        """POST sets 'locale' key in session."""
        request = RequestFactory().post(
            "/locale/", {"locale": "es-mx"})
        request.session = {}

        change_locale(request)

        self.assertEqual(
            request.session["locale"], "es-mx")

<!SLIDE incremental>

# Or don't. #

* I rarely unit test views.

* I write less view code, and cover it via functional tests.
