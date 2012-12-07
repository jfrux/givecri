# change the date of your countdown here
# year to countdown to

# month to countdown to 1 = Jan, 2 = Feb, etc

# hour to countdown to

# Function to slabtext the hero panel
slabTextHeadlines = ->
  
  # Don't slabtext the headers if the viewport is under 380px
  $("html:not(.ie8)").find(".slab").slabText viewportBreakpoint: 380

# countdown timer function
setupCountdownTimer = (date) ->
  countdownUnit = $(".countdown-unit")
  countdownBoxes = $(countdownUnit.find("span"))
  $(".countdown-unit").countdown
    timestamp: date
    callback: (days, hours, minutes, seconds, ms) ->
      $(countdownBoxes[0]).html days
      $(countdownBoxes[1]).html hours
      $(countdownBoxes[2]).html minutes
      $(countdownBoxes[3]).html seconds


# Function to create subtle parallax space effect
spaceParallax = ->
  $("body").parallax elements: [
    selector: ".bg-1"
    properties:
      x:
        "background-position-x":
          initial: 0
          multiplier: 0.02
          invert: true
  ,
    selector: ".bg-2"
    properties:
      x:
        "background-position-x":
          initial: 0
          multiplier: 0.06
          invert: true
  ,
    selector: ".bg-3"
    properties:
      x:
        "background-position-x":
          initial: 0
          multiplier: 0.2
          invert: true
  ]

# Function to hide the address bar ion Iphone devices
hideIphoneBar = ->
  if not window.location.hash and window.addEventListener
    window.addEventListener "load", ->
      setTimeout (->
        window.scrollTo 0, 0
      ), 0
  
  # fix placeholders for ie8, ie9
  $(".ie8, .ie9").find("input").placeholder()

$ ->
 
  countdownYear = 2012
  countdownMonth = 12
  countdownHour = 12
  countdownDate = new Date(countdownYear, countdownMonth - 1, countdownHour)
  setupCountdownTimer countdownDate
  spaceParallax()
  hideIphoneBar()
  $("[placeholder]").togglePlaceholder()
  $("#switcher").popover
    html: true
    content: getSwitcherContent

  #setupSwitcher()
  #setupSignupForm()

$(window).load ->
  slabTextHeadlines()

$.fn.togglePlaceholder = ->
  @each ->
    $(this).data("holder", $(this).attr("placeholder")).focusin(->
      $(this).attr "placeholder", ""
    ).focusout ->
      $(this).attr "placeholder", $(this).data("holder")

