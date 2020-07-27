		var mi_version = '7.11.0';
		var mi_track_user = true;
		var mi_no_track_reason = '';

		var disableStr = 'ga-disable-UA-23581568-13';

		/* Function to detect opted out users */
		function __gaTrackerIsOptedOut() {
			return document.cookie.indexOf(disableStr + '=true') > -1;
		}

		/* Disable tracking if the opt-out cookie exists. */
		if (__gaTrackerIsOptedOut()) {
			window[disableStr] = true;
		}

		/* Opt-out function */
		function __gaTrackerOptout() {
			document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
			window[disableStr] = true;
		}

		if ('undefined' === typeof gaOptout) {
			function gaOptout() {
				__gaTrackerOptout();
			}
		}

		if (mi_track_user) {
			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date(); a = s.createElement(o),
					m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js', '__gaTracker');

			window.ga = __gaTracker; __gaTracker('create', 'UA-23581568-13', 'auto', { 'useAmpClientId': true });
			__gaTracker('set', 'forceSSL', true);
			__gaTracker('set', 'anonymizeIp', true);
			__gaTracker('set', 'displayFeaturesTask', null);
			__gaTracker('send', 'pageview');
			__gaTracker(function () { window.ga = __gaTracker; });
		} else {
			console.log("");
			(function () {
				/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
				var noopfn = function () {
					return null;
				};
				var noopnullfn = function () {
					return null;
				};
				var Tracker = function () {
					return null;
				};
				var p = Tracker.prototype;
				p.get = noopfn;
				p.set = noopfn;
				p.send = noopfn;
				var __gaTracker = function () {
					var len = arguments.length;
					if (len === 0) {
						return;
					}
					var f = arguments[len - 1];
					if (typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function') {
						console.log('Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + mi_no_track_reason);
						return;
					}
					try {
						f.hitCallback();
					} catch (ex) {

					}
				};
				__gaTracker.create = function () {
					return new Tracker();
				};
				__gaTracker.getByName = noopnullfn;
				__gaTracker.getAll = function () {
					return [];
				};
				__gaTracker.remove = noopfn;
				window['__gaTracker'] = __gaTracker;
				window.ga = __gaTracker;
			})();
		}

