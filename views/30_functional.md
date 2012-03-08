<!SLIDE>

# Functional testing views #

<!SLIDE antipattern>

    @@@ python
    url = "/case/edit/{0}".format(case.pk)
    step = case.steps.get()
    response = self.client.post(url, {
        "product": case.product.id,
        "name": case.name,
        "description": case.description,
        "steps-TOTAL_FORMS": 2,
        "steps-INITIAL_FORMS": 1,
        "steps-MAX_NUM_FORMS": 3,
        "steps-0-step": step.step,
        "steps-0-expected": step.expected,
        "steps-1-step": "Click link.",
        "steps-1-expected": "Account active.",
        "status": case.status,
    })


<!SLIDE>

# or... #

<!SLIDE>

# WebTest! #

    @@@ python
    url = "/case/edit/{0}".format(case.pk)
    form = self.app.get(url).forms["case-form"]
    form["steps-1-step"] = "Click link."
    form["steps-1-expected"] = "Account active."

    response = form.submit()

.notes WebTest parses the form HTML and can submit it like a browser would.

<!SLIDE incremental>

# The markup matters. #

* If it can break, it should be tested.
* It can especially break forms.
* The output of your view is an HTTP response; the template + context is an
  implementation detail.

.notes Have to know which markup matters, of course.

<!SLIDE incremental>

## WebTest > django.test.Client ##

* Tests are easier and faster to write.
* Tests give you more confidence that the view works.
* (django-webtest provides integration.)

.notes Django test client is in the "sour spot" - not a unit test, not a full functional test.

<!SLIDE>

    @@@ python
    self.assertEqual(
       response.json, ["one", "two", "three"])

    self.assertEqual(
        resp.html.find("a", title="Login").href,
        "/login/"
        )

.notes Automatically parses JSON or HTML responses (BeautifulSoup or lxml).
