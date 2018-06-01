{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js'
  ]
%}
{% include '../_third-party/comments/changyan.swig' %}
{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}

