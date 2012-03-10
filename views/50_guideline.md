<!SLIDE incremental>

# What type of test to write? #

* Write system tests for your views.

* Write unit tests for everything else (not strict).

* Test each case (code branch) where it occurs.

* One assert/action per test case method.

.notes Very rough guidelines; what works for me. Not strict; e.g. tests for a ModelForm don't mock the model.


<!SLIDE>

    @@@ python
    def add_quote(request):
        if request.method == "POST":
            form = QuoteForm(request.POST)
            if form.is_valid():
                return redirect("quote_list")
        else:
            form = QuoteForm()

        return TemplateResponse(
            request,
            "add_quote.html",
            {"form": form},
            )

.notes This view should have 3 tests. Model/form special cases should be unit tested. And views shouldn't get much more complex.
