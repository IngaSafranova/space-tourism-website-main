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