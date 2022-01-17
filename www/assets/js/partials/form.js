$('.form-submit').click(function () {
    var form = $(this).parents('.form');
    var formAttr = $(this).parents('.form').attr("data-form");
    form.addClass(formAttr);

    var formClass = '.' + formAttr;
    var input = $(formClass + ' ' + '.form-required');
    var btn = $(formClass + ' ' + '.form-submit');

    var flag = true;

    input.each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            $(this).parents('.form-group').removeClass('validation-success');
            flag = false;
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
            $(this).parents('.form-group').addClass('validation-success');
        }
    });

    if (!flag) {
        btn.attr('disabled', 'disabled');
    }
    if (flag) {
        btn.attr('disabled', false);
        form.addClass('form-valid');
    }

    input.change(function () {
        $(this).parents('.form-group').removeClass('validation-error');
        $(this).parents('.form-group').removeClass('group-validation');
        $(this).parents('.form-group').addClass('validation-success');

        if ($(formClass + ' ' + '.form-group').hasClass("group-validation")) {
            btn.attr('disabled', 'disabled');
        } else {
            btn.attr('disabled', false);
            form.addClass('form-valid');
        }
    });
});