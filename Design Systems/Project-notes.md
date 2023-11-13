 1. Do CSS reset.
 2. Create UTILITY CLASSES.
    They do one thing, and do it very well
    Often have one declaration
    Allow things to be much more modular, and allow us to wrtite a lot less in the long run. (Like TAILWIND CSS)

    They are easy to use, Just put them in HTML as classes. 

                ADVANTAGES OF RGB & HSL

They let easily modify colors, especially HSL.

                  FONTS - TYPOGRAPHY

1. Break things up
   create classes for font-family, font-size, spacing.

 2. Use rem values instead of pixels to not override accesble users settings for fonts. 1rem usually 16px.(ROOT FONT-SIZE) To get rem divide given pixel values from 16.                    

         HOW TO MAKE FROSTED GLASS EFFECT

1. Make white 0r any color  backgraound with opacity 0.1
2. Use backdrop-filter: blur(1rem)
3. If broser do not support neew features nedd to put them @support() and leave default value in main styles.

      ACCECABILITY AND SCREEN READERS

 - To help screenreaders use relative and informative tags (header, nav, main,footer etc.).
 -  To hide text from screenreaders use attribute 'aria-hidden' = 'true' on the element.
 - To hide an element from people and use it for screen readers only use class = 'sr-only'.
 - All aria attributes are for screen readers.

 For people who are using TAB to move around the page use a link at the top of the page to move down to content. Hide this link from view and put back when in focus.    