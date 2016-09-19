# stylelint-no-z-index
Stylelint rule for preventing the use of z-index

## Usage
    // .stylelintrc
    {
      "plugins": [
        "stylelint-no-z-index"
      ],
      "rules": {
       // ...
       "plugin/no-z-index": 2,
       // ...
      }
    }

## Example of rules that will pass the linting:

    .foo {
       background: red;
    }

    .foo {
       z-index: auto;
    }

    .foo {
       z-index: inherit;
    }

    .foo {
       z-index: initial;
    }

    .foo {
       z-index: unset;
    }
   
## Example of rules that won't pass the linting:

    .foo {
      z-index: -1;
    }
    
    .foo {
      z-index: 0;
    }
    
    .foo {
      z-index: 100;
    }
   
