<!SLIDE antipattern>

# `tests/__init__.py` #

    @@@ python
    from .test_forms import QuoteFormTest
    from .test_models import (
        QuoteTest, SourceTest)
    from .test_views import (
        AddQuoteTest, EditQuoteTest,
        ListQuotesTest
        )

.notes Django made me do it. (Or worse yet, "import *".)
