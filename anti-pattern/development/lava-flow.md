





[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [AntiPatterns](/antipatterns){.type} / [Software
Development
AntiPatterns](/antipatterns/software-development-antipatterns){.type}


# Lava Flow {#lava-flow .title}




-   **AntiPattern Name:** Lava Flow
-   **Also Known As:** Dead Code
-   **Most Frequent Scale:** Application
-   **Refactored Solution Name:** Architectural Configuration Management
-   **Refactored Solution Type:** Process
-   **Root Causes:** Avarice, Greed, Sloth
-   **Unbalanced Forces:** Management of Functionality, Performance,
    Complexity
-   **Anecdotal Evidence:** \"Oh *that!* Well Ray and Emil (they\'re no
    longer with the company) wrote that routine back when Jim (who left
    last month) was trying a workaround for Irene\'s input processing
    code (she\'s in another department now, too). I don\'t think it\'s
    used anywhere now, but I\'m not really sure. Irene didn\'t really
    document it very clearly, so we figured we would just leave well
    enough alone for now. After all, the bloomin\' thing works doesn\'t
    it?!\"

### Background

In a data-mining expedition, we began looking for insight into
developing a standard interface for a particular kind of system. The
system we were mining was very similar to those we hoped would
eventually support the standard we were working on. It was also a
research-originated system and highly complex. As we delved into it, we
interviewed many of the developers concerning certain components of the
massive number of pages of code printed out for us.

Over and over, we got the same answer: \"I don\'t know what that class
is for; it was written before I got here.\" We gradually realized that
between 30 and 50 percent of the actual code that comprised this complex
system was not understood or documented by any one currently working on
it.

Furthermore, as we analyzed it, we learned that the questionable code
really served no purpose in the current system; rather, it was there
from previous attempts or approaches by long-gone developers. The
current staff, while very bright, was loath to modify or delete code
that they didn\'t write or didn\'t know the purpose of, for fear of
breaking something and not knowing why or how to fix it.

At this point, we began calling these blobs of code \"lava,\" referring
to the fluid nature in which they originated as compared to the
basaltlike hardness and difficulty in removing it once it had
solidified. Suddenly, it dawned on us that we had identified a potential
AntiPattern.

Nearly a year later, and after several more data-mining expeditions and
interface design efforts, we had encountered the same pattern so
frequently that we were routinely referring to Lava Flow throughout the
department.

<figure class="image">
<img src="/files/sm/images/antipatterns/img_29.jpg"
srcset="/files/sm/images/antipatterns/img_29.jpg 2x" width="504" />
</figure>

### General Form

The Lava Flow AntiPattern is commonly found in systems that originated
as research but ended up in production. It is characterized by the
lavalike \"flows\" of previous developmental versions strewn about the
code landscape, which have now hardened into a basaltlike, immovable,
generally useless mass of code that no one can remember much, if
anything, about.

This is the result of earlier (perhaps Jurassic) developmental times
when, while in a research mode, developers tried out several ways of
accomplishing things, typically in a rush to deliver some kind of
demonstration, thereby casting sound design practices to the winds and
sacrificing documentation.

``` {.code lang="java"}
// This class was written by someone earlier (Alex?) to manager the indexing
// or something (maybe). It's probably important. Don't delete. I don't think it's
// used anywhere - at least not in the new MacroINdexer module which may
// actually replace whatever this was used for.
class IndexFrame extends Frame {
  // IndexFrame constructor
  // ---------------------------
  public IndexFrame(String index_parameter_1)
  {
    // Note: need to add additional stuff here...
    super (str);
  }
  // ---------------------------
```

The result is several fragments of code, wayward variable classes, and
procedures that are not clearly related to the overall system. In fact,
these flows are often so complicated in appearance and spaghettilike
that they seem important, but no one can really explain what they do or
why they exist.

Sometimes, an old, gray-haired hermit developer can remember certain
details, but typically, everyone has decided to \"leave well enough
alone\" since the code in question \"doesn\'t really cause any harm, and
might actually be critical, and we just don\'t have time to mess with
it.\"

Though it can be fun to dissect these flows and study their
anthropology, there is usually not enough time in the schedule for such
meanderings. Instead, developers usually take the expedient route and
neatly work around them.

This AntiPattern is, however, incredibly common in innovative design
shops where proof-of-concept or prototype code rapidly moves into
production. It is poor design, for several key reasons:

-   Lava Flows are expensive to analyze, verify, and test. All such
    effort is expended entirely in vain and is an absolute waste. In
    practice, verification and test are rarely possible.
-   Lava Flow code can be expensive to load into memory, wasting
    important resources and impacting performance.
-   As with many AntiPatterns, you lose many of the inherent advantages
    of an object-oriented design. In this case, you lose the ability to
    leverage modularization and reuse without further proliferating the
    Lava Flow globules.

### Symptoms And Consequences

-   Frequent unjustifiable variables and code fragments in the system.
-   Undocumented complex, important-looking functions, classes, or
    segments that don\'t clearly relate to the system architecture.
-   Very loose, \"evolving\" system architecture.
-   Whole blocks of commented-out code with no explanation or
    documentation.
-   Lots of \"in flux\" or \"to be replaced\" code areas.
-   Unused (dead) code, just left in.
-   Unused, inexplicable, or obsolete interfaces located in header
    files.
-   If existing Lava Flow code is not removed, it can continue to
    proliferate as code is reused in other areas.
-   If the process that leads to Lava Flow is not checked, there can be
    exponential growth as succeeding developers, too rushed or
    intimidated to analyze the original flows, continue to produce new,
    secondary flows as they try to work around the original ones, this
    compounds the problem.
-   As the flows compound and harden, it rapidly becomes impossible to
    document the code or understand its architecture enough to make
    improvements.

### Typical Causes

-   R&D code placed into production without thought toward configuration
    management.
-   Uncontrolled distribution of unfinished code. Implementation of
    several trial approaches toward implementing some functionality.
-   Single-developer (lone wolf) written code.
-   Lack of configuration management or compliance with process
    management policies.
-   Lack of architecture, or non-architecture-driven development. This
    is especially prevalent with highly transient development teams.
-   Repetitive development process. Often, the goals of the software
    project are unclear or change repeatedly. To cope with the changes,
    the project must rework, backtrack, and develop prototypes. In
    response to demonstration deadlines, there is a tendency to make
    hasty changes to code on the fly to deal with immediate problems.
    The code is never cleaned up, leaving architectural consideration
    and documentation postponed indefinitely.
-   Architectural scars. Sometimes, architectural commitments that are
    made during requirements analysis are found not to work after some
    amount of development. The system architecture may be reconfigured,
    but these inline mistakes are seldom removed. It may not even be
    feasible to comment-out unnecessary code, especially in modern
    development environments where hundreds of individual files comprise
    the code of a system. \"Who\'s going to look in all those files?
    Just link em in!\"

### Known Exceptions

Small-scale, throwaway prototypes in an R&D environment are ideally
suited for implementing the Lava Flow AntiPattern. It is essential to
deliver rapidly, and the result is not required to be sustainable.

### Refactored Solution

There is only one sure-fire way to prevent the Lava Flow AntiPattern:
Ensure that sound architecture precedes production code development.
This architecture must be backed up by a configuration management
process that ensures architectural compliance and accommodates \"mission
creep\" (changing requirements).

If architectural consideration is shortchanged up front, ultimately,
code is developed that is not a part of the target architecture, and is
therefore redundant or dead. Over time, dead code becomes problematic
for analysis, testing, and revision.

In cases where Lava Flow already exists, the cure can be painful. An
important principle is to avoid architecture changes during active
development. In particular, this applies to computational architecture,
the software interfaces defining the systems integration solution.
Management must postpone development until a clear architecture has been
defined and disseminated to developers.

Defining the architecture may require one or more system discovery
activities. System discovery is required to locate the components that
are really used and necessary to the system. System discovery also
identifies those lines of code that can be safely deleted. This activity
is tedious; it can require the investigative skills of an experienced
software detective.

As suspected dead code is eliminated, bugs are introduced. When this
happens, resist the urge to immediately fix the symptoms without fully
understanding the cause of the error. Study the dependencies. This will
help you to better define the target architecture.

To avoid Lava Flow, it is important to establish system-level software
interfaces that are stable, well-defined, and clearly documented.
Investment up front in quality software interfaces can produce big
dividends in the long run compared to the cost of jackhammering away
hardened globules of Lava Flow code.

Tools such as the Source-Code Control System (SCCS) assist in
configuration management. SCCS is bundled with most Unix environments
and provides a basic capability to record histories of updates to
configuration-controlled files.

### Example

We recently participated in a data-mining expedition site where we
attempted to identify evolutionary interfaces that resulted from
preliminary interface architectures that we originated and were in the
process of updating.

The system we mined was targeted because the developers had utilized our
initial architecture in a unique way that fascinated us: Essentially,
they constructed a quasi-event service out of our generic
interapplication framework.

As we studied their system, we encountered large segments of code that
baffled us. These segments didn\'t seem to contribute to the overall
architecture that we had expected to find. They were somewhat incohesive
and only very sparsely documented, if at all.

When we asked the current developers about some of these segments, the
reply was, \"Oh that? Well we\'re not using that approach anymore.
Reggie was trying something, but we came up with a better way. I guess
some of Reggie\'s other code may depend on that stuff though, so we
didn\'t delete anything.\" As we looked deeper into the matter, we
learned that Reggie was no longer even at the site, and hadn\'t been
there for some time, so the segments of code were several months old.

After two days of code examination, we realized that the majority of the
code that comprised the system was most likely similar to that code that
we already examined: completely Lava Flow in nature.

We gleaned very little that helped us articulate how their architecture
actually was constructed; therefore, it was nearly impossible to mine.
At this point, we essentially gave up trying to mine the code and
instead focused on the current developer\'s explanations of what was
\"really\" going on, hoping to somehow codify their work into interface
extensions that we could incorporate into our upcoming revisions to our
generic interapplication framework.

One solution was to isolate the single, key person who best understood
the system they had developed, and then to jointly write IDL with that
person. On the surface, the purpose of the IDL we were jointly writing
was to support a crisis demonstration that was weeks away.

By utilizing the Fire Drill Mini-AntiPattern, we were able to get the
systems developers to validate our IDL by using it to rapidly build a
CORBA wrapper for their product for the demonstration. Many people lost
a lot of sleep, but the demonstration went well. There was, of course,
one side effect to this solution: We ended up with the interface, in
IDL, which we had set out to discover in the first place.

### Related Solutions

In today\'s competitive world, it is often desirable to minimize the
time delay between R&D and production. In many industries, this is
critical to a company\'s survival. Where this is the case, inoculation
against Lava Flow can sometimes be found in a customized
configuration-management (CM) process that puts certain limiting
controls in place at the prototyping stage, similar to \"hooks\" into a
real, production-class develop ment without the full restraining impact
on the experimental nature of R&D.

Where possible, automation can play a big role here, but the key lies in
the customization of a quasi-CM process that can be readily scaled into
a full-blown CM control system once the product moves into a production
environment. The issue is one of balance between the costs of CM in
hampering the creative process and the cost of rapidly gaining CM
control of the development once that creative process has birthed
something useful and marketable.

This approach can be facilitated by periodic mapping of a prototyping
system into an updated system architecture, including limited, but
standardized inline documentation of the code.

### Applicability To Other Viewpoints And Scales

The architectural viewpoint plays a key role in preventing Lava Flows
initially. Managers can also play a role in early identification of Lava
Flows or the circumstances that can lead to Lava Flows. These managers
must also have the authority to put the brakes on when Lava Flow is
first identified, postponing further development until a clear
architecture can be defined and disseminated.

As with most AntiPatterns, prevention is always cheaper than correction,
so up-front investment in good architecture and team education can
typically ensure a project against this and most other AntiPatterns.
While this initial cost does not show immediate returns, it is certainly
a good investment.







#### Read next

[Ambiguous Viewpoint []{.fa
.fa-arrow-right}](/antipatterns/ambiguous-viewpoint){.btn .btn-primary
rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Continuous
Obsolescence](/antipatterns/continuous-obsolescence){.btn .btn-default
rel="prev"}








[![](/images/content-public/didp-cover-en.png?id=2e1103ea2edb33a8979eebb8e1ba73b6){width="250"
srcset="/images/content-public/didp-cover-en-2x.png?id=0be443437e7b9e0d53cfbeef0092d658 2x"}](/design-patterns-ebook)





[ Dive Into Design Patterns
[new]{style="background-color:red; color:white; padding: 1px 3px; display:inline-block; position: absolute;right: -20px;top: -5px;font-size: 16px;"}](/design-patterns-ebook){.btn
.btn-landing-dp .btn-hg .btn-block .btn-secondary}


Hey, check out our new [ebook on design
patterns](/design-patterns-ebook). The book covers 22 patterns and 8
design principles, all supplied with code examples and illustrations.
Clear, short and fun!

Oh, and it is on sale **right now.**










[![SourceMaking](/images/content-public/logos/logo.png?id=55f0872eb5fd4505a39679db5f702b58){width="250"
height="312"
srcset="/images/content-public/logos/logo-2x.png?id=fee3b4b0a14ba60dc0fe368695d78be9 2x"}](/){.menu-brand}


-   [ Premium Stuff](/store)
    -   [ Dive Into Design Patterns](/design-patterns-ebook)
    -   [ Dive Into Refactoring](/refactoring-course)
    -   [ Computer Science Distilled](/computer-science-distilled)
-   [ Design Patterns](/design_patterns)
    -   [Creational patterns](/design_patterns/creational_patterns)
        -   [Abstract Factory Design
            Pattern](/design_patterns/abstract_factory)
        -   [Builder Design Pattern](/design_patterns/builder)
        -   [Factory Method Design
            Pattern](/design_patterns/factory_method)
        -   [Object Pool Design Pattern](/design_patterns/object_pool)
        -   [Prototype Design Pattern](/design_patterns/prototype)
        -   [Singleton Design Pattern](/design_patterns/singleton)
    -   [Structural patterns](/design_patterns/structural_patterns)
        -   [Adapter Design Pattern](/design_patterns/adapter)
        -   [Bridge Design Pattern](/design_patterns/bridge)
        -   [Composite Design Pattern](/design_patterns/composite)
        -   [Decorator Design Pattern](/design_patterns/decorator)
        -   [Facade Design Pattern](/design_patterns/facade)
        -   [Flyweight Design Pattern](/design_patterns/flyweight)
        -   [Private Class Data](/design_patterns/private_class_data)
        -   [Proxy Design Pattern](/design_patterns/proxy)
    -   [Behavioral patterns](/design_patterns/behavioral_patterns)
        -   [Chain of
            Responsibility](/design_patterns/chain_of_responsibility)
        -   [Command Design Pattern](/design_patterns/command)
        -   [Interpreter Design Pattern](/design_patterns/interpreter)
        -   [Iterator Design Pattern](/design_patterns/iterator)
        -   [Mediator Design Pattern](/design_patterns/mediator)
        -   [Memento Design Pattern](/design_patterns/memento)
        -   [Null Object Design Pattern](/design_patterns/null_object)
        -   [Observer Design Pattern](/design_patterns/observer)
        -   [State Design Pattern](/design_patterns/state)
        -   [Strategy Design Pattern](/design_patterns/strategy)
        -   [Template Method Design
            Pattern](/design_patterns/template_method)
        -   [Visitor Design Pattern](/design_patterns/visitor)
-   [ AntiPatterns](/antipatterns)
    -   [Software Development
        AntiPatterns](/antipatterns/software-development-antipatterns)
        -   [The Blob](/antipatterns/the-blob)
        -   [Continuous
            Obsolescence](/antipatterns/continuous-obsolescence)
        -   [Lava Flow](/antipatterns/lava-flow)
        -   [Ambiguous Viewpoint](/antipatterns/ambiguous-viewpoint)
        -   [Functional
            Decomposition](/antipatterns/functional-decomposition)
        -   [Poltergeists](/antipatterns/poltergeists)
        -   [Boat Anchor](/antipatterns/boat-anchor)
        -   [Golden Hammer](/antipatterns/golden-hammer)
        -   [Dead End](/antipatterns/dead-end)
        -   [Spaghetti Code](/antipatterns/spaghetti-code)
        -   [Input Kludge](/antipatterns/input-kludge)
        -   [Walking through a
            Minefield](/antipatterns/walking-through-minefield)
        -   [Cut-And-Paste
            Programming](/antipatterns/cut-and-paste-programming)
        -   [Mushroom Management](/antipatterns/mushroom-management)
    -   [Software Architecture
        AntiPatterns](/antipatterns/software-architecture-antipatterns)
        -   [Autogenerated
            Stovepipe](/antipatterns/autogenerated-stovepipe)
        -   [Stovepipe Enterprise](/antipatterns/stovepipe-enterprise)
        -   [Jumble](/antipatterns/jumble)
        -   [Stovepipe System](/antipatterns/stovepipe-system)
        -   [Cover Your Assets](/antipatterns/cover-your-assets)
        -   [Vendor Lock-In](/antipatterns/vendor-lock-in)
        -   [Wolf Ticket](/antipatterns/wolf-ticket)
        -   [Architecture By
            Implication](/antipatterns/architecture-by-implication)
        -   [Warm Bodies](/antipatterns/warm-bodies)
        -   [Design By Committee](/antipatterns/design-by-committee)
        -   [Swiss Army Knife](/antipatterns/swiss-army-knife)
        -   [Reinvent The Wheel](/antipatterns/reinvent-the-wheel)
        -   [The Grand Old Duke of
            York](/antipatterns/the-grand-old-duke-of-york)
    -   [Project Management
        AntiPatterns](/antipatterns/software-project-management-antipatterns)
        -   [Blowhard Jamboree](/antipatterns/blowhard-jamboree)
        -   [Analysis Paralysis](/antipatterns/analysis-paralysis)
        -   [Viewgraph Engineering](/antipatterns/viewgraph-engineering)
        -   [Death By Planning](/antipatterns/death-by-planning)
        -   [Fear of Success](/antipatterns/fear-of-success)
        -   [Corncob](/antipatterns/corncob)
        -   [Intellectual Violence](/antipatterns/intellectual-violence)
        -   [Irrational Management](/antipatterns/irrational-management)
        -   [Smoke and Mirrors](/antipatterns/smoke-and-mirrors)
        -   [Project Mismanagement](/antipatterns/project-mismanagement)
        -   [Throw It over the
            Wall](/antipatterns/throw-it-over-the-wall)
        -   [Fire Drill](/antipatterns/fire-drill)
        -   [The Feud](/antipatterns/the-feud)
        -   [E-mail Is Dangerous](/antipatterns/e-mail-is-dangerous)
-   [ Refactoring](/refactoring)
    -   [Code Smells](/refactoring/smells)
        -   [Bloaters](/refactoring/smells/bloaters)
            -   [Long Method](/refactoring/smells/long-method)
            -   [Large Class](/refactoring/smells/large-class)
            -   [Primitive
                Obsession](/refactoring/smells/primitive-obsession)
            -   [Long Parameter
                List](/refactoring/smells/long-parameter-list)
            -   [Data Clumps](/refactoring/smells/data-clumps)
        -   [Object-Orientation Abusers](/refactoring/smells/oo-abusers)
            -   [Switch
                Statements](/refactoring/smells/switch-statements)
            -   [Temporary Field](/refactoring/smells/temporary-field)
            -   [Refused Bequest](/refactoring/smells/refused-bequest)
            -   [Alternative Classes with Different
                Interfaces](/refactoring/smells/alternative-classes-with-different-interfaces)
        -   [Change Preventers](/refactoring/smells/change-preventers)
            -   [Divergent Change](/refactoring/smells/divergent-change)
            -   [Shotgun Surgery](/refactoring/smells/shotgun-surgery)
            -   [Parallel Inheritance
                Hierarchies](/refactoring/smells/parallel-inheritance-hierarchies)
        -   [Dispensables](/refactoring/smells/dispensables)
            -   [Comments](/refactoring/smells/comments)
            -   [Duplicate Code](/refactoring/smells/duplicate-code)
            -   [Lazy Class](/refactoring/smells/lazy-class)
            -   [Data Class](/refactoring/smells/data-class)
            -   [Dead Code](/refactoring/smells/dead-code)
            -   [Speculative
                Generality](/refactoring/smells/speculative-generality)
        -   [Couplers](/refactoring/smells/couplers)
            -   [Feature Envy](/refactoring/smells/feature-envy)
            -   [Inappropriate
                Intimacy](/refactoring/smells/inappropriate-intimacy)
            -   [Message Chains](/refactoring/smells/message-chains)
            -   [Middle Man](/refactoring/smells/middle-man)
        -   [Other Smells](/refactoring/smells/other)
            -   [Incomplete Library
                Class](/refactoring/smells/incomplete-library-class)
    -   [Refactoring techniques](/refactoring/refactorings)
        -   [Composing Methods](/refactoring/composing-methods)
            -   [Extract Method](/refactoring/extract-method)
            -   [Inline Method](/refactoring/inline-method)
            -   [Extract Variable](/refactoring/extract-variable)
            -   [Inline Temp](/refactoring/inline-temp)
            -   [Replace Temp with
                Query](/refactoring/replace-temp-with-query)
            -   [Split Temporary
                Variable](/refactoring/split-temporary-variable)
            -   [Remove Assignments to
                Parameters](/refactoring/remove-assignments-to-parameters)
            -   [Replace Method with Method
                Object](/refactoring/replace-method-with-method-object)
            -   [Substitute
                Algorithm](/refactoring/substitute-algorithm)
        -   [Moving Features between
            Objects](/refactoring/moving-features-between-objects)
            -   [Move Method](/refactoring/move-method)
            -   [Move Field](/refactoring/move-field)
            -   [Extract Class](/refactoring/extract-class)
            -   [Inline Class](/refactoring/inline-class)
            -   [Hide Delegate](/refactoring/hide-delegate)
            -   [Remove Middle Man](/refactoring/remove-middle-man)
            -   [Introduce Foreign
                Method](/refactoring/introduce-foreign-method)
            -   [Introduce Local
                Extension](/refactoring/introduce-local-extension)
        -   [Organizing Data](/refactoring/organizing-data)
            -   [Self Encapsulate
                Field](/refactoring/self-encapsulate-field)
            -   [Replace Data Value with
                Object](/refactoring/replace-data-value-with-object)
            -   [Change Value to
                Reference](/refactoring/change-value-to-reference)
            -   [Change Reference to
                Value](/refactoring/change-reference-to-value)
            -   [Replace Array with
                Object](/refactoring/replace-array-with-object)
            -   [Duplicate Observed
                Data](/refactoring/duplicate-observed-data)
            -   [Change Unidirectional Association to
                Bidirectional](/refactoring/change-unidirectional-association-to-bidirectional)
            -   [Change Bidirectional Association to
                Unidirectional](/refactoring/change-bidirectional-association-to-unidirectional)
            -   [Replace Magic Number with Symbolic
                Constant](/refactoring/replace-magic-number-with-symbolic-constant)
            -   [Encapsulate Field](/refactoring/encapsulate-field)
            -   [Encapsulate
                Collection](/refactoring/encapsulate-collection)
            -   [Replace Type Code with
                Class](/refactoring/replace-type-code-with-class)
            -   [Replace Type Code with
                Subclasses](/refactoring/replace-type-code-with-subclasses)
            -   [Replace Type Code with
                State/Strategy](/refactoring/replace-type-code-with-state-strategy)
            -   [Replace Subclass with
                Fields](/refactoring/replace-subclass-with-fields)
        -   [Simplifying Conditional
            Expressions](/refactoring/simplifying-conditional-expressions)
            -   [Decompose
                Conditional](/refactoring/decompose-conditional)
            -   [Consolidate Conditional
                Expression](/refactoring/consolidate-conditional-expression)
            -   [Consolidate Duplicate Conditional
                Fragments](/refactoring/consolidate-duplicate-conditional-fragments)
            -   [Remove Control Flag](/refactoring/remove-control-flag)
            -   [Replace Nested Conditional with Guard
                Clauses](/refactoring/replace-nested-conditional-with-guard-clauses)
            -   [Replace Conditional with
                Polymorphism](/refactoring/replace-conditional-with-polymorphism)
            -   [Introduce Null
                Object](/refactoring/introduce-null-object)
            -   [Introduce Assertion](/refactoring/introduce-assertion)
        -   [Simplifying Method
            Calls](/refactoring/simplifying-method-calls)
            -   [Rename Method](/refactoring/rename-method)
            -   [Add Parameter](/refactoring/add-parameter)
            -   [Remove Parameter](/refactoring/remove-parameter)
            -   [Separate Query from
                Modifier](/refactoring/separate-query-from-modifier)
            -   [Parameterize Method](/refactoring/parameterize-method)
            -   [Replace Parameter with Explicit
                Methods](/refactoring/replace-parameter-with-explicit-methods)
            -   [Preserve Whole
                Object](/refactoring/preserve-whole-object)
            -   [Replace Parameter with Method
                Call](/refactoring/replace-parameter-with-method-call)
            -   [Introduce Parameter
                Object](/refactoring/introduce-parameter-object)
            -   [Remove Setting
                Method](/refactoring/remove-setting-method)
            -   [Hide Method](/refactoring/hide-method)
            -   [Replace Constructor with Factory
                Method](/refactoring/replace-constructor-with-factory-method)
            -   [Replace Error Code with
                Exception](/refactoring/replace-error-code-with-exception)
            -   [Replace Exception with
                Test](/refactoring/replace-exception-with-test)
        -   [Dealing with
            Generalisation](/refactoring/dealing-with-generalisation)
            -   [Pull Up Field](/refactoring/pull-up-field)
            -   [Pull Up Method](/refactoring/pull-up-method)
            -   [Pull Up Constructor
                Body](/refactoring/pull-up-constructor-body)
            -   [Push Down Method](/refactoring/push-down-method)
            -   [Push Down Field](/refactoring/push-down-field)
            -   [Extract Subclass](/refactoring/extract-subclass)
            -   [Extract Superclass](/refactoring/extract-superclass)
            -   [Extract Interface](/refactoring/extract-interface)
            -   [Collapse Hierarchy](/refactoring/collapse-hierarchy)
            -   [Form Template
                Method](/refactoring/form-template-method)
            -   [Replace Inheritance with
                Delegation](/refactoring/replace-inheritance-with-delegation)
            -   [Replace Delegation with
                Inheritance](/refactoring/replace-delegation-with-inheritance)
-   [ UML](/uml)
    -   [Introduction](/uml/introduction)
    -   [Basic Principles and Background](/uml/basic-principles)
        -   [Introduction to the Case
            Study](/uml/basic-principles-and-background/introduction-to-the-case-study)
        -   [Models, Views, and
            Diagrams](/uml/basic-principles-and-background/models-views-and-diagrams)
        -   [Information Systems and IT
            Systems](/uml/basic-principles-and-background/information-systems-and-it-systems)
        -   [The Models of our Case
            Study](/uml/basic-principles-and-background/the-models-of-our-case-study)
        -   [History of UML: Methods and
            Notations](/uml/basic-principles-and-background/history-of-uml-methods-and-notations)
        -   [Requirement
            Specification](/uml/basic-principles-and-background/requirement-specification)
        -   [UML 2.0](/uml/basic-principles-and-background/uml2)
    -   [Modeling Business Systems](/uml/modeling-business-systems)
        -   [Business Processes and Business
            Systems](/uml/modeling-business-systems/business-processes-and-business-systems)
        -   [One Model---Two
            Views](/uml/modeling-business-systems/one-model-two-views)
        -   [External
            View](/uml/modeling-business-systems/external-view)
        -   [The Elements of a
            View](/uml/modeling-business-systems/the-elements-of-view)
        -   [Use Case
            Diagrams](/uml/modeling-business-systems/external-view/use-case-diagrams)
        -   [Constructing Use Case
            Diagrams](/uml/modeling-business-systems/external-view/constructing-use-case-diagrams)
        -   [Activity
            Diagrams](/uml/modeling-business-systems/external-view/activity-diagrams)
        -   [Constructing Activity
            Diagrams](/uml/modeling-business-systems/external-view/constructing-activity-diagrams)
        -   [Sequence
            Diagrams](/uml/modeling-business-systems/external-view/sequence-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-business-systems/external-view/constructing-sequence-diagrams)
        -   [High-Level Sequence
            Diagrams](/uml/modeling-business-systems/external-view/high-level-sequence-diagrams)
        -   [Sequence Diagrams for Scenarios of Business Use
            Cases](/uml/modeling-business-systems/external-view/sequence-diagrams-for-scenarios-of-business-use-cases)
        -   [Internal
            View](/uml/modeling-business-systems/the-internal-view)
        -   [Package
            Diagram](/uml/modeling-business-systems/internal-view/package-diagram)
        -   [Constructing Package
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-package-diagrams)
        -   [Class
            Diagram](/uml/modeling-business-systems/internal-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-class-diagrams)
        -   [Activity
            Diagram](/uml/modeling-business-systems/internal-view/activity-diagram)
    -   [Modeling IT Systems](/uml/modeling-it-systems)
        -   [External View](/uml/modeling-it-systems/external-view)
        -   [The User View or \"I don\'t care how it works, as long as
            it
            works.\"](/uml/modeling-it-systems/external-view/the-user-view-or-i-dont-care-how-it-works-as-long-as-it-works)
        -   [The Elements of a
            View](/uml/modeling-it-systems/external-view/the-elements-of-view)
        -   [Use Case
            Diagram](/uml/modeling-it-systems/external-view/the-elements-of-view/use-case-diagram)
        -   [Query Events and Mutation
            Events](/uml/modeling-it-systems/external-view/query-events-and-mutation-events)
        -   [Use Case Sequence
            Diagram](/uml/modeling-it-systems/external-view/use-case-sequence-diagram)
        -   [Constructing the External
            View](/uml/modeling-it-systems/external-view/constructing-the-external-view)
        -   [Structural View](/uml/modeling-it-systems/structural-view)
        -   [Objects and
            Classes](/uml/modeling-it-systems/structural-view/objects-and-classes)
        -   [Generalization, Specialization, and
            Inheritance](/uml/modeling-it-systems/structural-view/generalization-specialization-and-inheritance)
        -   [Static and Dynamic Business
            Rules](/uml/modeling-it-systems/structural-view/static-and-dynamic-business-rules)
        -   [Elements of the
            View](/uml/modeling-it-systems/structural-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-it-systems/structural-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-it-systems/structural-view/constructing-class-diagrams)
        -   [The Behavioral
            View](/uml/modeling-it-systems/the-behavioral-view)
        -   [The Life of an
            Object](/uml/modeling-it-systems/the-behavioral-view/the-life-of-an-object)
        -   [The Elements of the
            View](/uml/modeling-it-systems/the-behavioral-view/the-elements-of-the-view)
        -   [Statechart
            Diagram](/uml/modeling-it-systems/the-behavioral-view/statechart-diagram)
        -   [Constructing Statechart
            Diagrams](/uml/modeling-it-systems/the-behavioral-view/constructing-statechart-diagrams)
        -   [Interaction
            View](/uml/modeling-it-systems/interaction-view)
        -   [Seeing What Happens Inside the IT
            System](/uml/modeling-it-systems/interaction-view/seeing-what-happens-inside-the-it-system)
        -   [Elements of the
            View](/uml/modeling-it-systems/interaction-view/elements-of-the-view)
        -   [Communication
            Diagram](/uml/modeling-it-systems/interaction-view/communication-diagram)
        -   [Sequence
            Diagram](/uml/modeling-it-systems/interaction-view/sequence-diagram)
        -   [Constructing Communication
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-communication-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-sequence-diagrams)
    -   [Modeling for System
        Integration](/uml/modeling-for-system-integration)
        -   [Terminology of System
            Integration](/uml/modeling-for-system-integration/terminology-of-system-integration)
        -   [Messages in
            UML](/uml/modeling-for-system-integration/messages-in-uml)
        -   [One Model---Two
            Views](/uml/modeling-for-system-integration/one-model-two-views)
        -   [Process
            View](/uml/modeling-for-system-integration/process-view)
        -   [The Business System Model as
            Foundation](/uml/modeling-for-system-integration/process-view/the-business-system-model-as-foundation)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/process-view/elements-of-the-view)
        -   [Activity
            Diagrams](/uml/modeling-for-system-integration/process-view/activity-diagrams)
        -   [Sequence
            Diagram](/uml/modeling-for-system-integration/process-view/sequence-diagram)
        -   [Constructing Diagrams in the Process
            View](/uml/modeling-for-system-integration/process-view/constructing-diagrams-in-the-process-view)
        -   [The Static
            View](/uml/modeling-for-system-integration/the-static-view)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/the-static-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-for-system-integration/the-static-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-for-system-integration/the-static-view/constructing-class-diagrams)
        -   [Transforming Data from the IT System to the Message
            \"passenger
            list\"](/uml/modeling-for-system-integration/the-static-view/transforming-data-from-the-it-system-to-the-mess)
        -   [Transformation of UML Messages into Various Standard
            Formats](/uml/modeling-for-system-integration/the-static-view/transformation-of-uml-messages-into-various-stan)



[ Log in](https://sourcemaking.com/login "Log in") [ Contact
us](https://feedback.sourcemaking.com/ "Contact us"){.userecho-public
rel="nofollow"}





[![SourceMaking](/images/content-public/logos/logo-min-xs.png?id=f4a48661fc32a3f349b76a075f28594c){srcset="/images/content-public/logos/logo-min-xs-2x.png?id=34fc05750336c33b7815e231a0f227df 2x"}](/){.navigation-brand}


[![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgZmlsbDogY3VycmVudENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi10b3A6IC0xNHB4OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTEyIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM1NiA2MGw2MCAyMC02MCAyMC0yMCA2MC0yMC02MEwyNTYgODBsNjAtMjBMMzM2IDBsMjAgNjB6TTQ2NCAyMDhsNDggMTYtNDggMTYtMTYgNDgtMTYtNDgtNDgtMTYgNDgtMTYgMTYtNDggMTYgNDh6bS0yNDMuOC05LjhsMzMgNjYuOSA3My44IDEwLjcgNTkuOCA4LjctNDMuMyA0Mi4yLTUzLjQgNTIuMSAxMi42IDczLjVMMzEzIDUxMmwtNTMuNS0yOC4xLTY2LTM0LjctNjYgMzQuN0w3My45IDUxMmwxMC4yLTU5LjYgMTIuNi03My41TDQzLjMgMzI2LjggMCAyODQuNmw1OS44LTguNyA3My44LTEwLjcgMzMtNjYuOUwxOTMuNSAxNDRsMjYuOCA1NC4yem0yNi4xIDExNC40bC0yNS0zLjYtMTEuMi0yMi42LTE2LjctMzMuOS0xNi43IDMzLjlMMTY1LjYgMzA5bC0yNSAzLjYtMzcuNCA1LjQgMjcuMSAyNi40IDE4LjEgMTcuNkwxNDQgMzg3bC02LjQgMzcuMyAzMy41LTE3LjYgMjIuMy0xMS43IDIyLjMgMTEuNyAzMy41IDE3LjZMMjQyLjkgMzg3bC00LjMtMjQuOSAxOC4xLTE3LjYgMjcuMS0yNi40LTM3LjQtNS40eiI+PC9wYXRoPjwvc3ZnPg==)
Shop Now!](/store){.btn .btn-md .btn-primary .btn-featured}


-   [ [Contact us]{.caption .d-none
    .d-xl-inline-block}](https://feedback.sourcemaking.com/?show_feedback_form_private=true "Contact us"){.userecho-private
    rel="nofollow"}
-   [ [Log in]{.caption .d-none
    .d-xl-inline-block}](https://sourcemaking.com/login "Log in")
-   






-   [Design Patterns](/design_patterns)
-   [AntiPatterns](/antipatterns)
-   [Refactoring](/refactoring)
-   [UML](/uml)



-   [My account](/home)
-   [Forum](https://sourcemaking.userecho.com/){.userecho-public
    rel="nofollow"}
-   [Contact
    us](https://sourcemaking.userecho.com/?show_feedback_form_private=true){.userecho-private
    rel="nofollow"}
-   [About us](/about-us)










© 2007-2023 [SourceMaking.com](/)[ / ]{.d-none .d-md-inline}\
All rights reserved.



[Terms](/terms) / [Privacy policy](/privacy-policy)






