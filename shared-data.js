// ══════════════════════════════════════════════════════════════════════════════
// SHARED DATA — loaded by VeniceSchedulingSuite.html AND request.html.
// Edit base schedules and clinic holidays HERE; both pages pick up the change.
// ══════════════════════════════════════════════════════════════════════════════

// KP Venice clinic closure days — "H" on individual schedules means whole clinic is closed
const CLINIC_HOLIDAYS = new Set([
  '2026-01-01', // New Year's Day
  '2026-01-19', // MLK Day
  '2026-02-16', // Presidents' Day
  '2026-05-25', // Memorial Day
  '2026-07-03', // Independence Day (observed)
  '2026-09-07', // Labor Day
  '2026-11-26', // Thanksgiving
  '2026-11-27', // Day after Thanksgiving
  '2026-12-25', // Christmas
  '2027-01-01', // New Year's Day
]);

// Base weekly schedule profiles — sourced from physician profile docs (physician profiles folder).
// Keys: 1=Mon … 5=Fri. Used as fallback when a monthly schedule day is blank.
// OB = Obesity Medicine in MOD 150 (frees the physician's own Venice rooms).
// eve:'F2F' = 5–7pm evening clinic that day (only physicians who do evenings have it).
const WEEKLY_SHIFTS = {
  bazargan: {1:{am:'AT', pm:'AT'}, 2:{am:'AT', pm:'AT'}, 3:{am:'AT', pm:'AT'}, 4:{am:'F2F',pm:'AT'}, 5:{am:'F2F',pm:'AT'}},
  chen:     {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'VV'}, 5:{am:'F2F',pm:'VV'}},
  dao:      {1:{am:'VV', pm:'OFF'},2:{am:'F2F',pm:'ET', eve:'F2F'}, 3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'F2F',eve:'F2F'},5:{am:'F2F',pm:'F2F'}},  // profile June 2026: eve Tue+Thu
  fang:     {1:{am:'OFF',pm:'OFF'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F'},4:{am:'VV', pm:'F2F'},5:{am:'F2F',pm:'F2F'}},  // profile checked (file May 2026), matches
  green:    {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'OFF',pm:'F2F'},4:{am:'F2F',pm:'OFF'},5:{am:'F2F',pm:'IW'}},
  kimm:     {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'OFF'},4:{am:'F2F',pm:'F2F'},5:{am:'F2F',pm:'OFF'}},
  lagos:    {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'F2F'},3:{am:'F2F',pm:'OB'}, 4:{am:'F2F',pm:'OFF'},5:{am:'F2F',pm:'OFF'}},  // profile Oct 2026: Wed PM Obesity Med in MOD 150; ET 1 Tue PM/month
  moghtader:{1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'F2F'},3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'ET'}, 5:{am:'F2F',pm:'F2F'}},
  morales:  {1:{am:'F2F',pm:'OFF'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'OFF'},5:{am:'F2F',pm:'F2F'}},
  nguyen:   {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'VV'}, 5:{am:'F2F',pm:'F2F'}},
  nudell:   {1:{am:'F2F',pm:'F2F',eve:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F',eve:'F2F'},4:{am:'F2F',pm:'OFF'},5:{am:'OFF',pm:'OFF'}},  // profile June 2026: eve Mon+Wed
  ozaki:    {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'F2F'},3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'ET'}, 5:{am:'F2F',pm:'F2F'}},
  pham:     {1:{am:'AT', pm:'OFF'},2:{am:'F2F',pm:'F2F'},3:{am:'OFF',pm:'IW'}, 4:{am:'F2F',pm:'ET'}, 5:{am:'F2F',pm:'F2F'}},
  saeedian: {1:{am:'F2F',pm:'OFF'},2:{am:'VV', pm:'F2F'},3:{am:'F2F',pm:'OFF'},4:{am:'F2F',pm:'F2F'},5:{am:'F2F',pm:'F2F'}},  // profile Oct 2026; ET 1 Tue PM/month
  siegel:   {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET'}, 3:{am:'F2F',pm:'F2F'},4:{am:'F2F',pm:'F2F'},5:{am:'F2F',pm:'F2F'}},
  zakka:    {1:{am:'F2F',pm:'AT'}, 2:{am:'IW', pm:'ET'}, 3:{am:'F2F',pm:'AT'}, 4:{am:'F2F',pm:'F2F'},5:{am:'IW', pm:'F2F'}},
  noori:    {1:{am:'F2F',pm:'F2F'},2:{am:'F2F',pm:'ET', eve:'F2F'}, 3:{am:'VV', pm:'OFF'},4:{am:'F2F',pm:'F2F',eve:'F2F'},5:{am:'F2F',pm:'F2F'}},  // profile Dec 2026: eve Tue+Thu
  wessel:   {1:{am:'OFF',pm:'VV'}, 2:{am:'F2F',pm:'F2F',eve:'F2F'},3:{am:'F2F',pm:'F2F'},4:{am:'ET', pm:'F2F',eve:'F2F'},5:{am:'F2F',pm:'F2F'}},  // profile Aug 2026: eve Tue+Thu
};
