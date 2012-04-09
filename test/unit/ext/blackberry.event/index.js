/*
 * Copyright 2010-2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _apiDir = __dirname + "./../../../../ext/blackberry.event/",
    _libDir = __dirname + "./../../../../lib/",
    index,
    events = require(_libDir + "event");

describe("blackberr.event index", function () {

    beforeEach(function () {
        GLOBAL.JNEXT = {};
        index = require(_apiDir + "index");
    });

    afterEach(function () {
        delete GLOBAL.JNEXT;
        index = null;
    });

    it("responds to 'batterystatus' events", function () {
        var event = "batterystatus",
            args = {eventName : encodeURIComponent(event)}; 
        spyOn(events, "on");
        index.on(null, null, args);
        expect(events.on).toHaveBeenCalled();
        expect(events.on.mostRecentCall.args[0].event.eventName).toEqual("batterystatus");
    });

    it("removes 'batterystatus' events", function () {
        var event = "batterystatus",
            args = {eventName : encodeURIComponent(event)}; 
        spyOn(events, "remove");
        index.remove(null, null, args);
        expect(events.remove).toHaveBeenCalled();
        expect(events.remove.mostRecentCall.args[0].event.eventName).toEqual("batterystatus");
    });

});