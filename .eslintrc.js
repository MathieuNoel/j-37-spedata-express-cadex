module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        browser: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    // Afin que ESlint connaissent les fonction utiles à jest il faut ajouter le module en tant que
    // plugin de ESlint
    plugins: ['jest'],
    // Ici on peut surchargé une règle défini par le style Airbnb
    rules: {
        // Nous ce que l'on veut c'est changé l'indentation et passé de 2 à 4 espaces.
        indent: ['error', 4],

        // règles pour le module "jest"
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
};
