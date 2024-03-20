export const streamlitDoc = `
# Streamlit Documentation
## st.number_input(label, min_value=None, max_value=None, value=, step=None, format=None, key=None, help=None, on_change=None, args=None, kwargs=None, *, disabled=False, label_visibility="visible")
Display a numeric input widget.
Parameters
----------
label : str
    A short label explaining to the user what this input is for.
    The label can optionally contain Markdown and supports the following
    elements: Bold, Italics, Strikethroughs, Inline Code, Emojis, and Links.
    This also supports:
    * Emoji shortcodes, such as \`:+1:\`  and \`:sunglasses:\`.
      For a list of all supported codes,
      see https://share.streamlit.io/streamlit/emoji-shortcodes.
    * LaTeX expressions, by wrapping them in "$" or "$$" (the "$$"
      must be on their own lines). Supported LaTeX functions are listed
      at https://katex.org/docs/supported.html.
    * Colored text, using the syntax \`:color[text to be colored]\`,
      where \`color\` needs to be replaced with any of the following
      supported colors: blue, green, orange, red, violet, gray/grey, rainbow.
    Unsupported elements are unwrapped so only their children (text contents) render.
    Display unsupported elements as literal characters by
    backslash-escaping them. E.g. \`1\. Not an ordered list\`.
    For accessibility reasons, you should never set an empty label (label="")
    but hide it with label_visibility if needed. In the future, we may disallow
    empty labels by raising an exception.
min_value : int, float, or None
    The minimum permitted value.
    If None, there will be no minimum.
max_value : int, float, or None
    The maximum permitted value.
    If None, there will be no maximum.
value : int, float, or None
    The value of this widget when it first renders.
    Defaults to min_value, or 0.0 if min_value is None
step : int, float, or None
    The stepping interval.
    Defaults to 1 if the value is an int, 0.01 otherwise.
    If the value is not specified, the format parameter will be used.
format : str or None
    A printf-style format string controlling how the interface should
    display numbers. Output must be purely numeric. This does not impact
    the return value. Valid formatters: %d %e %f %g %i %u
key : str or int
    An optional string or integer to use as the unique key for the widget.
    If this is omitted, a key will be generated for the widget
    based on its content. Multiple widgets of the same type may
    not share the same key.
help : str
    An optional tooltip that gets displayed next to the input.
on_change : callable
    An optional callback invoked when this number_input's value changes.
args : tuple
    An optional tuple of args to pass to the callback.
kwargs : dict
    An optional dict of kwargs to pass to the callback.
disabled : bool
    An optional boolean, which disables the number input if set to
    True. The default is False. This argument can only be supplied by
    keyword.
label_visibility : "visible", "hidden", or "collapsed"
    The visibility of the label. If "hidden", the label doesn't show but there
    is still empty space for it above the widget (equivalent to label="").
    If "collapsed", both the label and the space are removed. Default is
    "visible". This argument can only be supplied by keyword.
Returns
-------
int or float
    The current value of the numeric input widget. The return type
    will match the data type of the value parameter.
Example
-------
>>> import streamlit as st
>>>
>>> number = st.number_input('Insert a number')
>>> st.write('The current number is ', number)
`