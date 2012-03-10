<!SLIDE incremental>

# Imposing no-DB discipline. #

* For certain test cases.

<!SLIDE>

    @@@ python
    from django.utils.unittest import TestCase

    import mock

    cursor_wrapper = mock.Mock()
    cursor_wrapper.side_effect = \
        RuntimeError("No touching the database!")


    @mock.patch(
        "django.db.backends.util.CursorWrapper",
        cursor_wrapper)
    class NoDBTestCase(TestCase):
        """Will blow up if you database."""

.notes django.utils.unittest.TestCase vs django.test.TestCase. Latter's assertions mostly useful with the DB, but either way works.
