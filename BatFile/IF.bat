REM  the grammar
REM 1. if [not] errorlevel number command. IF ERRORLEVEL must behind the command that need to return the value.
REM 2. if [not] string1==string2 command.  {string1}=={string2} to avoid the space.
REM 3. if [not] exist filename command

@echo off
dir c:
if errorlevel 0 goto 0
if errorlevel 1 goto 1
:0
echo Dirc Successful!
:1
echo Dirc Failed!

pause

set par=%1
if %par%==1 goto 1
if %par%==0 goto 0
:0
echo Par Successful!
:1
echo Par Failed!

pause
if exist learnBat.bat echo learnbat exist!
if not exist learnBat.bat echo learnbat not exist!
