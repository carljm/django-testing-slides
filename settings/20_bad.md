<!SLIDE antipattern>

    @@@ python
    def test_comments_allowed(self):
      old_allow = settings.ALLOW_COMMENTS
      settings.ALLOW_COMMENTS = True
      try:
        # ...
      finally:
        settings.ALLOW_COMMENTS = old_allow
