'use strict';

const sheetsJson = `
  {
    "regular expressions": "https://cheatography.com//davechild/cheat-sheets/regular-expressions/pdf/",
    "php": "https://cheatography.com//krabat1/cheat-sheets/php/pdf/",
    "python": "https://cheatography.com//davechild/cheat-sheets/python/pdf/",
    "object oriented design": "https://cheatography.com//david/cheat-sheets/object-oriented-design/pdf/",
    "perl": "https://cheatography.com//mishin/cheat-sheets/perl-reference-card/pdf/",
    "perlcheat": "https://cheatography.com//mishin/cheat-sheets/perlcheat/pdf/",
    "php fundamentals": "https://cheatography.com//mkpeacock/cheat-sheets/php-fundamentals/pdf/",
    "object oriented design principles": "https://cheatography.com//scottashipp/cheat-sheets/object-oriented-design-principles/pdf/",
    "c": "https://cheatography.com//kimyo/cheat-sheets/c/pdf/",
    "perl short": "https://cheatography.com//mishin/cheat-sheets/perl-short-version/pdf/",
    "vim rails": "https://cheatography.com//blackxored/cheat-sheets/vim-rails/pdf/",
    "rascal": "https://cheatography.com//rubene/cheat-sheets/rascal/pdf/",
    "coffeescript": "https://cheatography.com//apk/cheat-sheets/coffeescript-language/pdf/",
    "django models": "https://cheatography.com//lewiseason/cheat-sheets/django-models/pdf/",
    "clean code": "https://cheatography.com//cheatography/cheat-sheets/clean-code/pdf/",
    "ghc and rts options": "https://cheatography.com//nash/cheat-sheets/ghc-and-rts-options/pdf/",
    "php cheatsheet": "https://cheatography.com//media-slave/cheat-sheets/php-cheatsheet/pdf/",
    "net regular expressions": "https://cheatography.com//cheatography/cheat-sheets/net-regular-expressions/pdf/",
    "eclipse": "https://cheatography.com//oli-p/cheat-sheets/eclipse/pdf/",
    "which programming language should i learn first": "https://cheatography.com//cheatography/cheat-sheets/which-programming-language-should-i-learn-first/pdf/",
    "c prog": "https://cheatography.com//theawesomeloner/cheat-sheets/c-prog/pdf/",
    "roblox gamepad input": "https://cheatography.com//ozzypig/cheat-sheets/roblox-gamepad-input/pdf/",
    "nodejs": "https://cheatography.com//raffi001/cheat-sheets/nodejs/pdf/",
    "clean code": "https://cheatography.com//costemaxime/cheat-sheets/summary-of-clean-code-by-robert-c-martin/pdf/",
    "python conditions": "https://cheatography.com//nouha-thabet/cheat-sheets/python-conditions/pdf/",
    "c naming-conventions": "https://cheatography.com//gregfinzer/cheat-sheets/c-naming-conventions/pdf/",
    "python operators and booleans": "https://cheatography.com//nouha-thabet/cheat-sheets/python-operators-and-booleans/pdf/",
    "dokku": "https://cheatography.com//jejete/cheat-sheets/dokku/pdf/",
    "ruby plsql": "https://cheatography.com//jgebal/cheat-sheets/ruby-plsql-cheat-sheet/pdf/",
    "roblox cframes": "https://cheatography.com//ozzypig/cheat-sheets/roblox-cframes/pdf/",
    "r basic": "https://cheatography.com//dipakk/cheat-sheets/r-basic/pdf/",
    "java midterm": "https://cheatography.com//sefergus/cheat-sheets/java-midterm/pdf/",
    "essential vanilla-javascript-methods": "https://cheatography.com//bytecut/cheat-sheets/essential-vanilla-javascript-methods/pdf/",
    "c unit tests basics": "https://cheatography.com//alienengineer/cheat-sheets/c-unit-tests-basics/pdf/",
    "linkedlist adt": "https://cheatography.com//evanescesn09/cheat-sheets/linkedlist-adt/pdf/",
    "haskell": "https://cheatography.com//cheatography/cheat-sheets/haskell/pdf/",
    "intellij": "https://cheatography.com//myak/cheat-sheets/intellij-idea/pdf/",
    "spacemacs": "https://cheatography.com//kdelwat/cheat-sheets/spacemacs/pdf/",
    "c#": "https://cheatography.com//kemmojoo/cheat-sheets/see-sharp/pdf/",
    "python regular expression regex": "https://cheatography.com//mutanclan/cheat-sheets/python-regular-expression-regex/pdf/",
    "subscript": "https://cheatography.com//anatoliykmetyuk/cheat-sheets/subscript/pdf/",
    "pragmatic programming": "https://cheatography.com//marconlsantos/cheat-sheets/pragmatic-programming/pdf/",
    "bash test expressions": "https://cheatography.com//andrsrz/cheat-sheets/bash-test-expressions/pdf/",
    "python dictionairies": "https://cheatography.com//nouha-thabet/cheat-sheets/python-dictionairies/pdf/",
    "c coding standards": "https://cheatography.com//gregfinzer/cheat-sheets/c-coding-standards/pdf/",
    "python introduction": "https://cheatography.com//nouha-thabet/cheat-sheets/python-introduction/pdf/",
    "coldfusion member-functions": "https://cheatography.com//thenewcoke/cheat-sheets/coldfusion-member-functions/pdf/",
    "typescript": "https://cheatography.com//gregfinzer/cheat-sheets/typescript/pdf/",
    "redes": "https://cheatography.com//gigabit/cheat-sheets/redes/pdf/",
    "ruby essentials for kids": "https://cheatography.com//simon-fermor/cheat-sheets/ruby-essentials-for-kids/pdf/",
    "bitmanipulation": "https://cheatography.com//miracoli/cheat-sheets/bitmanipulation/pdf/",
    "hypothesis testing-with-scipy": "https://cheatography.com//sasha2411/cheat-sheets/hypothesis-testing-with-scipy/pdf/",
    "solid for-unity": "https://cheatography.com//gekko/cheat-sheets/solid-for-unity/pdf/",
    "moq": "https://cheatography.com//alienengineer/cheat-sheets/moq/pdf/",
    "core java": "https://cheatography.com//evanescesn09/cheat-sheets/core-java/pdf/",
    "ocaml": "https://cheatography.com//advitya/cheat-sheets/ocaml/pdf/",
    "infinitepos java cheat sheet": "https://cheatography.com//infinitepos/cheat-sheets/infinitepos-s-java-cheat-sheet/pdf/",
    "build related-concepts-and-utilities": "https://cheatography.com//zyqhi/cheat-sheets/build-related-concepts-and-utilities/pdf/",
    "what is programming and what do programmers do": "https://cheatography.com//cheatography/cheat-sheets/what-is-programming-and-what-do-programmers-do/pdf/",
    "rhinomocks": "https://cheatography.com//gregfinzer/cheat-sheets/rhinomocks/pdf/",
    "c pointers cookbook": "https://cheatography.com//nimakarimian/cheat-sheets/c-pointers-cookbook/pdf/",
    "golang": "https://cheatography.com//andanhm/cheat-sheets/golang/pdf/",
    "python sets": "https://cheatography.com//nouha-thabet/cheat-sheets/python-sets/pdf/",
    "roblox": "https://cheatography.com//ozzypig/cheat-sheets/roblox-general-scripting/pdf/",
    "r": "https://cheatography.com//noella/cheat-sheets/introduction-to-package-r-sheet/pdf/",
    "linux": "https://cheatography.com//nexwebsites/cheat-sheets/basic-linux-commands/pdf/",
    "intermediate python": "https://cheatography.com//mr-kitty/cheat-sheets/intermediate-python/pdf/",
    "aritificial intelligence cheat sheet": "https://cheatography.com//deleted-31421/cheat-sheets/aritificial-intelligence-cheat-sheet/pdf/",
    "c unit tests advanced": "https://cheatography.com//alienengineer/cheat-sheets/c-unit-tests-advanced/pdf/",
    "programming aqa computer science": "https://cheatography.com//deleted-56036/cheat-sheets/programming-aqa-computer-science/pdf/",
    "sorting": "https://cheatography.com//evanescesn09/cheat-sheets/sorting/pdf/",
    "c reference": "https://cheatography.com//ashlyn-black/cheat-sheets/c-reference/pdf/",
    "jquery utility functions type testing": "https://cheatography.com//dan-schmidt/cheat-sheets/jquery-utility-functions-type-testing/pdf/",
    "strings in ruby": "https://cheatography.com//nedzadarek/cheat-sheets/strings-in-ruby/pdf/",
    "hex memory numbers": "https://cheatography.com//ohm-spectator/cheat-sheets/hex-memory-numbers/pdf/",
    "ripgrep": "https://cheatography.com//njones/cheat-sheets/ripgrep/pdf/"
  }
`;
const sheets = JSON.parse(sheetsJson);

async function cheatSheet(query) {
  try {
    const sheet = sheets[query];
    return {
      type: 'cheat-sheet',
      url: sheet
    }
  }
  catch (error) {
    console.error('cheatSheet error', error);
  }
}

async function trigger(query) {
  try {
    for (const key in sheets) {
      if (query === key) {
        return true;
      }
    }

    return false;
  }
  catch (error) {
    console.error('cheatSheet trigger error', error);
  }
}

module.exports = { cheatSheet, trigger };
