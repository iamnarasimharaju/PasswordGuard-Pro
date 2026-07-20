export function checkCompliance(password, score, entropy, patterns) {

    const owasp =
        password.length >= 12 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password) &&
        !patterns.hasCommonPassword;

    const nist =
        password.length >= 8 &&
        !patterns.hasCommonPassword &&
        !patterns.hasKeyboardPattern;

    const enterprise =
        password.length >= 12 &&
        entropy.entropy >= 60 &&
        score.score >= 80 &&
        !patterns.hasRepeatedCharacters;

    return {
        owasp,
        nist,
        enterprise,
        strongEntropy: entropy.entropy >= 60,
        characterDiversity:
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[^A-Za-z0-9]/.test(password),
    };
}