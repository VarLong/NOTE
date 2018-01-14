@echo off
REM echo print Rem 
:: echo print  
:: @ will close the console show，no matter echo is on or off.

REM echo.  means 'Enter'


echo echo off>auto.bat
echo HelloWorld!>>auto.bat
REM echo MainFirst>auto.bat
type auto.bat
REM errorlevel is 0, the error is 1
echo %errorlevel%  
REM change the pause word
REM echo change Ohter key word to connitue...&pause>nul

echo %errorlevel%  


if {%1}=={} goto changetitle else goto changecolor

:changetitle
title New TitleName
color 01
:changecolor
color 05

find "HelloWorld" auto.bat
del auto.bat
REM using GUI to open D:
REM start explorer d:\mp3


REM show the relation type of the filetype. output like this: .txt=txtfile  .doc=Word.Document.8
REM assoc 

assoc .txt

REM will change .txt into .doc file.
REM assoc .txt=Word.Document.8

REM creat folder
REM md mp3 

REM excute another batch file , will reture back when finish another batch


REM shift remove the parameter /n position   like shift /2 will remove the second parameter.

echo Hello^
 world^
 bat^



