/**
 * Which package suits which couple.
 *
 * Built from Andy's own answers rather than invented benefits. The three
 * "one camera" tests are things a couple can check against their own day in
 * seconds, and the closing note deliberately points some people at the cheaper
 * option, because that is what makes the rest of the page believable.
 */

const core = [
  "Your wedding is on the slightly smaller side",
  "You are not looking for all the extras, you want a lovely set of essential memories",
  "A shorter film that shows as much of the day, in slightly less detail, is what you are after",
  "Everything under one roof, or a church and then a venue. Either works",
];

const complete = [
  "You want to cherish the longer moments: the first look with your dad, more of the vows, more of the readings, more of the speeches",
  "You would rather the film built a story around those speaking moments than sampled them",
  "You want more angles and more faces, so the edit can change pace between the suspense, the joy and the emotion",
];

const tests = [
  {
    title: "You are getting ready in separate places",
    body: "If you both want following from the start of the day and you are not in the same building, one camera has to choose. Two does not.",
  },
  {
    title: "More than 100 day guests",
    body: "If capturing as many of your guests as possible matters to you, a second filmmaker is what makes that realistic in a full room.",
  },
  {
    title: "A packed schedule",
    body: "I have to set up for the speeches and pack down the ceremony rig, and those are windows where things get missed. On Core I also need about 20 minutes in the ceremony room before you, so a late first look can slip past me.",
  },
];

const gains = [
  "Your guests mingling, while I am setting up for whatever is next",
  "Quiet portraits of the two of you, while your guests carry on enjoying themselves",
  "Guest reactions through the ceremony, filmed by someone whose only job that is",
  "The same through the speeches",
  "Groom prep, which gets overlooked more than anything else on a wedding day",
];

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]"
    />
  );
}

export function PackagePicker() {
  return (
    <section className="pt-16">
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        Which one
      </p>
      <h2 className="mt-4 max-w-lg font-serif text-3xl text-[var(--khaki)]">
        Honestly, which package is right for you
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-muted)]">
        Both packages run the same hours, usually something like half ten in the
        morning until half eight at night. The Complete Story is not a longer
        day, it is a fuller one.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-sm border border-[var(--rule)] p-7">
          <h3 className="font-serif text-2xl text-[var(--khaki)]">
            Core is probably right if
          </h3>
          <ul className="mt-5 space-y-3">
            {core.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]"
              >
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] p-7">
          <h3 className="font-serif text-2xl text-[var(--khaki)]">
            The Complete Story is probably right if
          </h3>
          <ul className="mt-5 space-y-3">
            {complete.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]"
              >
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-serif text-2xl text-[var(--khaki)]">
          Three signs one camera will not be enough
        </h3>
        <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
          If any of these describe your day, the second videographer stops being
          a nice extra and starts being the thing that decides what ends up in
          your film.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {tests.map((test, i) => (
            <li
              key={test.title}
              className="border-t-2 border-[var(--gold)] pt-5"
            >
              <p className="font-serif text-sm text-[var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-2 font-serif text-xl text-[var(--khaki)]">
                {test.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {test.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14">
        <h3 className="font-serif text-2xl text-[var(--khaki)]">
          What the second filmmaker is actually off doing
        </h3>
        <ul className="mt-6 divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
          {gains.map((item) => (
            <li
              key={item}
              className="py-3 text-sm leading-relaxed text-[var(--ink-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-sm border border-[var(--rule)] bg-[var(--paper-alt)] p-7">
        <h3 className="font-serif text-xl text-[var(--khaki)]">
          If you only want the longer film
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">
          Some couples want a 14 to 18 minute film and genuinely do not need a
          second filmmaker. If that is you, do not buy The Complete Story. Add
          the extended feature film to the Core package for £250 instead and
          keep the difference.
        </p>
        <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">
          What you give up by doing that is everything in the list above, which
          is a fair trade for plenty of weddings. I would rather tell you that
          than take the larger booking.
        </p>
      </div>
    </section>
  );
}
