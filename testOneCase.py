import subprocess
import os
import threading
import time

###############Begin Configuration section #########################
runTimes=1000
testCmdLine="node node_modules/nightwatch/bin/nightwatch --env ofunk-chrome-win8  -t artifacts\\build\\tests\GoldenThreads\\ViewEPGPlayLiveTVShow\\ViewEPGPlayLiveTVShow.js"
###############End Configuration section######################

###############Below are the main program body, do not change it if you are not intended  ######
mylock = threading._allocate_lock()
failTimes=0
errorsLog=""
def runTest(cmd):
    global failTimes
    global mylock
    global errorsLog
    print("start new test running ")
    child = subprocess.Popen(cmd,stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    message=child.communicate()
    if child.returncode != 0:
        mylock.acquire()
        failTimes=failTimes+1
        mylock.release()
    print("one test process ended")


testThreads=[]
for i in range(0,runTimes):
    th = threading.Thread(target=runTest, args=(testCmdLine,))
    testThreads.append(th)

print("start test running ")
for th in testThreads:
    th.start()
    time.sleep(5 * 60)

for t in testThreads:
    t.join()
print("Test Result Status :")
print("Total :{0} Passed: {1}  Failed: {2}".format(runTimes,(runTimes-failTimes),failTimes))
print("Done, please see StableCheckerFailLogs.log file for detailed failed info if have  ")