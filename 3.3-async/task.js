class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(startAct, act, iD) {
        try {
            if (iD === undefined) {
                throw new Error('ID неопределен');
            }
            if (this.alarmCollection.find(elem => elem.id === iD) !== undefined) {
                throw new Error('этот ID уже определен');
            }
            this.alarmCollection.push({
                id: iD,
                time: startAct,
                callback: act,
            })
            console.log(this.alarmCollection);
        } catch (err) {
            console.error(err);
        }
        return;


    }

    removeClock(iD) {
        let resultDelete;
        this.alarmCollection = this.alarmCollection.filter(elem => {
            if (elem.id !== iD) {
                resultDelete = true;
                return true;
            } else {
                resultDelete = false;
                return false;
            }
        })
        return resultDelete;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        const checkClock = (call) => {
            if (call.time === new Date().toLocaleTimeString().slice(0, -3)) {
                call.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(elem => checkClock(elem)), 1000);
            console.log(this.timerId);
        }

    }

    stop() {
        if (this.timerId !== null) {
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(elem.id + ' ' + elem.time));
    }

    clearAlarms() {
        clearInterval();
        this.alarmCollection.forEach(elem => this.removeClock(elem.id));
    }
}

const phoneAlarm = new AlarmClock();
phoneAlarm.addClock('21:01', () => console.log('скоро спать'), 1);
phoneAlarm.addClock('21:02', () => {
    console.log('скоро спать'), phoneAlarm.removeClock(2)
}, 2);
phoneAlarm.addClock('22:01', () => console.log('иди умывайся'));
phoneAlarm.addClock('22:02', () => {
    console.log('иди спать завтра рано вставать');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);
phoneAlarm.addClock('22:05', () => console.log('иди спать завтра рано вставать'), 3);
phoneAlarm.printAlarms();
phoneAlarm.start();
