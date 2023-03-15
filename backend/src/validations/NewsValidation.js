const yup = require("yup");

exports.newsValidation = yup.object({
    title: yup.string().required(),
    text: yup.string().required()
});