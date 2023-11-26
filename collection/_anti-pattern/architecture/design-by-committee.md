





[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [AntiPatterns](/antipatterns){.type} / [Software
Architecture
AntiPatterns](/antipatterns/software-architecture-antipatterns){.type}


# Design By Committee {#design-by-committee .title}




-   **AntiPattern Name:** Design by Committee
-   **Also Known As:** Gold Plating, Standards Disease, Make Everybody
    Happy, Political Party
-   **Most Frequent Scale:** Global
-   **Refactored Solution Name:** Meeting Facilitation
-   **Refactored Solution Type:** Process
-   **Root Causes:** Pride, Avarice
-   **Unbalanced Forces:** Management of Functionality, Complexity, and
    Resources
-   **Anecdotal Evidence:** \"A camel is a horse designed by a
    committee.\" \"Too many cooks spoil the broth.\"

### Background

Object orientation is often described as a two-generation technology.
Data-centric object analysis is characteristic of the first generation,
and design patterns are characteristic of the second.

The first generation espoused a philosophy that \"objects are things you
can touch.\" A consequence of this is that virtually all designs are
uniquely vertical. In the first generation, people believed a number of
assumptions that were unsubstantiated by practice.

<figure class="image">
<img src="/files/sm/images/comittee.jpg"
srcset="/files/sm/images/comittee.jpg 2x" width="384" />
</figure>

One of these was that project teams should be egalitarian; in other
words, that everyone should have an equal say and that decisions are
democratic. This leads to Design by Committee. Given that only a small
number of object developers can define good abstractions, the majority
rule invariably leads to a diffusion of abstraction and excess
complexity.

### General Form

A complex software design is the product of a committee process. It has
so many features and variations that it is infeasible for any group of
developers to realize the specifications in a reasonable time frame.

Even if the designs were possible, it would not be possible to test the
full design due to excessive complexity, ambiguities, overconstraint,
and other specification defects. The design would lack conceptual
clarity because so many people contributed to it and extended it during
its creation.

### Symptoms And Consequences

-   The design documentation is overly complex, unreadable, incoherent,
    or is excessively defective.
-   The design documentation is voluminous (hundreds or thousands of
    pages).
-   Convergence and stability are missing from the requirements and the
    design.
-   The committee meetings resemble bull sessions during which
    substantive issues are rarely discussed and progress is
    painstakingly slow. People talk and work serially; that is, there is
    a single thread of discussion, and most people are unproductive most
    of the time.
-   The environment is politically changed, and few decisions and
    actions can be undertaken outside of the meeting; and the meeting
    process precludes reaching timely decisions.
-   There is no prioritization of the design features, and no ready
    answer to the questions: Which features are essential? Which
    features will be implemented in the initial delivery?
-   Architects and developers have conflicting interpretations of the
    design.
-   Design development becomes significantly over-budget and overdue.
-   It becomes necessary to employ specialists to interpret, develop,
    and manage the specifications. In other words, dealing with each
    specification that was designed by committee becomes a full-time
    job.

### Typical Causes

-   No designated project architect.
-   A degenerate or ineffective software process.
-   Bad meeting processes, marked by lack of facilitation or ineffective
    facilitation. The meetings are bull sessions; the loudest people win
    and the level of discourse is the lowest common denominator of
    sophistication.
-   Gold plating---that is, features are added to the specification
    based on proprietary interests. This can happen for many reasons:
    marketability, the existence of proprietary technologies already
    containing these features, or speculative placement of features in
    the specification for potential future work.
-   The attempt to make everybody happy, to satisfy all of the committee
    participants by incorporating their ideas. Unfortunately, it\'s
    impossible to accept every idea and still manage complexity.
-   Design and editing is attempted during meetings with more than five
    people.
-   Explicit priorities and a software-value system are undetermined
-   Concerns are not separated, and reference models are not used.

### Known Exceptions

There are few exceptions to the Design by Committee AntiPattern, and
they occur when the committee is small: approximately 6 to 10 people;
more than that and consensus becomes unlikely; fewer than six people and
the breadth of understanding and experience become insufficient.

Also, committees should often be *tiger teams,* a small group of
\"experts\" in a particular problem domain, organized for the duration
of the solution for a specific problem or issue.

### Refactored Solution

The essence of the solution to Design by Committee is to reform the
meeting process. It\'s fair to say that most people are accustomed to
enduring bad meetings, most of the time.

Thus, even simple alterations in the meeting process can yield
substantial productivity improvements. With improved productivity, there
is an opportunity for enhanced quality and more sophisticated solutions.
Typical gains for software optimizations are less than an order of
magnitude (2 to 10 times). Meeting productivity gains are much more
dramatic, with several orders of magnitude typical (100 times), and we
have seen productivity gains over 100,000:1.

First, most meeting rooms do not have a clock on the wall, particularly
in hotel facilities. Time awareness is essential to meeting progress.
Participants should be coached to manage the time allotted efficiently;
participants should start their comments with a \"25-words-or-less\"
summary, and add details only if requested. Posting the meeting goals,
an agenda, and a clock where they are visible to all participants can
improve meetings dramatically.

Second, in all meetings it\'s important that group members answer two
questions: \"Why are we here?\" and \"What outcomes do we want?\" When
no meeting plan is prepared, it is particularly important that the group
start with these two questions, and then work on generating the desired
outcomes.

Another important reform is to assign explicit roles in the software
process: owner, facilitator, architect, developers, testers, and domain
experts. The owner is the manager responsible for the software
development. He or she makes strategic decisions about the overall
software process, and invites and organizes the participants.

At the beginning of the meeting, the process owner sets the goals and
establishes expectations regarding the handling of the outcomes. For
example, the decisions made at the meeting may be regarded simply as
advice or be implemented exactly as discussed.

The facilitator is in charge of running the meeting. He or she is
responsible for the process; other participants are responsible for
technical content. The facilitator turns to the process owner if there
are any key decisions to be made regarding the process.

The architect is the senior technical lead for the software project. He
or she controls the editing of the architecture documentation, and may
be in charge of key, system-level boundaries, such as the subsystem
application program interfaces.

Each developer is typically responsible for a single subsystem and unit
testing. Testers are responsible for monitoring specification quality
and value-added testing such as integration, portability, and stress
tests. The domain experts input key requirements to the process, but may
not be involved in all aspects of development.

There are three categories of meeting processes: divergent, convergent,
and information sharing. In a divergent process, ideas are generated for
later utilization. In a convergent process, a selection or decision is
made that represents a consensus. Information sharing can involve
presentation, teaching, writing, and review.

The number of people involved in each meeting process is managed by the
facilitator. Creative processes that require writing, highlighting, or
drawing should be limited to breakout teams of five people or fewer.

Groups larger than five are less effective at making progress in
creative tasks, although they are successful at reviewing and
integrating results after a creative process. Highly productive meetings
involve many parallel processes, and frequent iterations of breakout and
review groups. Encouraging people to make a paradigm shift between
single-threaded discussion and parallel work is a key challenge for the
facilitator.

The primary purpose of most meetings is problem solving. A general
problem-solving approach begins with a convergent process: The problem
is defined and scoped for the group to resolve.

A divergent process is used to identify alternative solutions.
Information sharing may be needed to explore the details and
consequences of selected alternatives. Finally, a convergent process is
used to select among the options.

One highly effective meeting process is called Spitwads It\'s a
general-purpose procedure that we have used on many occasions with
excellent results.

1.  *Ask the question.* The facilitator poses a question for the group
    to brainstorm. The question is written down on a viewgraph or
    flipchart) to avoid misunderstandings. The group is asked whether
    there are any suggested changes to the question before the
    brainstorming starts. Typical questions are: \"What are ways that we
    can improve the performance of the system?\" and \"What is the most
    important requirement that has not been addressed?\"
2.  *Write silently.* The participants write responses on identical
    slips of paper. Each response is written on a separate piece of
    paper, and is limited to short phrases.
3.  *Toss spitwads.* As the participants complete each idea, the
    facilitator instructs them to wad up the paper and toss it across
    the room into a receptacle---a cardboard box or a basket works best.
    This is done basketball style, and the facilitator encourages the
    participants to have fun with this exercise.
4.  *Conduct spitwad roll call.* The \"spitwads\" are distributed
    randomly back to the participants, who one at a time read the ideas
    out loud to be recorded on a flipchart. Two flipchart recorders can
    be used simultaneously to speed up the process. The flipcharts are
    posted on the wall for all participants to see.
5.  *Reach common understanding.* The ideas on the flipcharts are
    numbered. The facilitator then asks the group if there are any ideas
    that they do not understand. If so, the members of the group are
    encouraged to offer definitions. If an idea cannot be defined, it is
    safe to eliminate it.
6.  *Eliminate duplicates.* The facilitator asks the group to identify
    any ideas that are duplicates or that should be combined.
    Participants identify the ideas by number to suggest changes. If
    there is an objection, the changes are overruled. (This is a common
    facilitation approach for editing: If there are objections to a
    proposed change, then the change is not accepted.)
7.  *Prioritize.* The group is directed to silently select the best
    ideas on the list by number. They can pick more than one. The
    facilitator walks through the list tabulating votes (raised hands,
    no discussion).
8.  *Discuss.* The exercise is complete. The group discusses the
    highest-priority selections and suggests what the follow-up actions
    will be.

### Variations

The Railroad (also known as Rubber Stamp) AntiPattern is a variation of
Design by Committee, whereby a political coalition dominates the process
and forces the adoption of designs with serious defects. The Railroad is
often motivated by mutual business interests of many members of the
committee. By adopting incomplete and defective specifications, details
of the technology can be hidden effectively in the software.

In this way, software from a coalition developer becomes the de facto
standard, as opposed to the written specifications. Some developers
outside the coalition will even attempt to implement the
\"misfeatures,\" resulting in wasted time and money.

### Example

Two classic examples of Design by Committee come from the domain of
software standardization: the Structured Query Language (SQL) and Common
Object Request Broker Architecture (CORBA).

#### Sql

The Structured Query Language (SQL) became an international standard in
1989. The original, SQL89, was a small document---115 pages---that
represented an efficient, minimal design for the technology Virtually
all relational database products implemented the full specification.

In 1992, the second version of SQL was standardized with significant
extensions that resulted in a 580-page document. The SQL92 specification
was implemented with a unique dialect in every product; few products
implemented the entire specification. The next version of SQL, called
SQL3, may well be thousands of pages in length.

The standards committee responsible for the design is adding a
smorgasbord of new features that extend the concept well beyond the
original intent. Some of the new features include object-orientation
extensions, geospatial extensions, and temporal-logic extensions.

It\'s unlikely that any product will ever fully implement SQL3, nor is
it likely that any two products will implement the same subset in a
portable manner. In this classic Design by Committee, the SQL standard
has become a dumping ground for advanced database features.

An interesting solution to the problems of SQL convergence is presented
by the technologies: Open Database Connectivity (ODBC) and Java Database
Connectivity (JDBC). Each defined a standard application program
interface for database access based on dynamic queries, query statements
that are submitted and parsed at run time.

Because ODBC and JDBC define the query interface and query language for
the clients, they provide isolation from product-specific database
features. Clients can access multiple database products transparently.
ODBC became an industry standard through the SQL Access Group (SAG), a
software industry consortium.

Microsoft developed the ODBC specification independently of SAG, and
then proposed it to the group. The specification was adopted rapidly by
SAG and became a de facto industry standard. Vendors that promote
proprietary solutions have had difficulty replacing this highly
effective technology, which is universally supported by database vendors
and database tool developers.

#### Corba

The Common Object Request Broker Architecture (CORBA) standard was
adopted by the industry in 1991. The original document---fewer than 200
pages---was easily readable by outsiders to the Object Management Group
(OMG) process. In 1995, a revised CORBA2 specification released, with
significant upgrades and extensions, including C++ and Smalltalk
mappings, the Interface Repository, and the Internet Inter-ORB Protocol
(IIOP).

The C++ mapping in CORBA2, in particular, contained complex details that
could not be implemented consistently by Object Request Broker (ORB)
vendors, some of whom changed the APIs generated by their IDL/C++
compilers repeatedly. The Basic Object Adapter (BOA) had been
substantially revised in CORBA2.

A replacement of this part of CORBA, called the Portable Object Adapter
(POA), was adopted in 1997. Since the POA duplicates BOA functionality
already in working products, successful vendors may have little
motivation to upgrade their products. And because of all this attention
on the basic infrastructure, some of the more critical needs of users
are allocated lower priority.

An alternative process used by OMG to identify and define technologies
for adoption was used by the OMG to produce the CORBAfacilities
Architecture. This process was reused by other task forces and end-user
enterprises to define their architectures and road maps. The authors
called this the \"Lost Architecture Process\" because it was
undocumented (until now).

The Lost Architecture Process is a facilitated architecture-definition
procedure that entails the following steps. It may be adapted to the
needs of specific enterprises, by replacing OMG processes with
organization-specific processes, such as internal surveys and off-site
workshops.

1.  *Release a request for information (RFI).* The purpose of the RFI is
    to survey interested parties both inside and outside OMG. Interested
    parties from any organization are asked to submit their
    requirements, architectural input, and descriptions of relevant
    technologies to assist in the planning process.

2.  *Review the RFI responses.* Any responses received (typically a
    dozen or fewer) are reviewed by the task force. This completes the
    survey and data-collection phase of the process. Once the task force
    has reviewed this input, it becomes the responsibility of the people
    in the room to define the architecture.

    The RFI process is an important step psychologically, because it
    transforms an undefined set of stakeholders and implicit
    requirements into the responsibility of the meeting participants to
    define the architecture and draw the road map.

3.  *Identify candidate services and facilities.* The candidate services
    are listed on flipcharts and posted in the meeting room for
    participants to review. This listing can begin during the RFI review
    process, and a brainstorming session can extend these lists with
    additional facilities. It is important to solicit all ideas, then to
    cull the list, watching for duplicates and overlapping services.

4.  *Launch the initial RFP process.* Probably, at least one of the
    identified services will be an obvious candidate for an RFP release.
    It is highly likely that some team of vendors is attending the
    meeting with the goal of adopting a particular technology. This team
    can break out to work on the initial RFP and start the task force
    adoption processes. The other services and facilities will be
    defined during the balance of the process.

5.  *Diagram the architecture.* A small breakout group organizes the
    list of services into categories, in the form of a block diagram
    showing layers of services and horizontal delineations. Obviously,
    this group needs at least one person skilled in reference model
    diagramming techniques. This architecture reference diagram is a
    useful abstraction of the listed services, and will be an important
    illustration in the architecture document. All services and
    facilities are listed in the diagram.

6.  *Define preliminary service.* The group parcels out services to be
    defined in terms of a number of viewgraph bullets. People meet in
    small groups or work individually to define the services in this
    form. The results are reviewed and discussed by the entire task
    force, during which additions and edits to the bulleted phrases are
    recommended and discussed.

7.  *Write the service definitions.* Using the content portion of the
    RFP template, each of the identified services is written up. Writing
    assignments are worked on in between meetings. At this point, an
    architecture document editor (just one person is best) must be
    appointed to receive the inputs and create a draft document.

8.  *Draft the document.* The document editor assembles the submitted
    service definitions and the architecture diagram into a draft
    document. The editor may add boilerplate descriptions of the overall
    architecture so that the document can stand on its own.

    A table of services and service categories is also included in the
    document to summarize and abstract the contents of the service
    definitions.

9.  *Review the process.* An updated draft of the architecture document
    is reviewed at each meeting. Editorial changes are proposed and
    discussed for the next revision. Any missing sections or service
    write-ups are assigned to group members for independent work and
    incorporation by the editor.

10. *Define the road map.* The road map is a profile of the architecture
    that focuses on priority and schedule. Several key criteria
    establish the priorities and define the schedules. These include
    industry need for the technology, dependencies between technologies,
    broadness of technology applicability, and the workload of the task
    force.

    The road map definition is a critical part of the process that
    allows member groups to organize resources and plan research
    relevant to the adoption processes.

11. *Conduct the approval process.* After several iterations of the
    review process, a motion is made to release the architecture and
    road map as version 1.0. Further revisions can occur after version
    1.0 is released; however, the passage of this motion indicates that
    the task force has reached a consensus on the initial architecture.

### Related Solutions, Patterns, and AntiPatterns

Kyle Brown posted a version of the Design by Committee AntiPattern on
the Portland Patterns Repository site That pattern uses a different
template, which focuses entirely on describing the problematic solution
and not upon the refactored solution. In contrast, this book includes a
refactored solution with each AntiPattern, noting that Socrates was put
to death for exposing society\'s contradictions without offering any
constructive suggestions.

### Applicability to Other Viewpoints and Scales

The impact of the Design by Committee AntiPattern on developers is that
they are expected to implement a highly complex and ambiguous design,
which is a stressful situation. They may find the need to quietly
subvert the demands of the committee with more realistic design
approaches.

Managers suffer from this AntiPattern through a dramatic increase in
project risk caused by the excessive complexity. Correspondingly, the
schedule and budget of the project are likely to increase dramatically
as the consequences of the design are discovered in the laboratory.

At the system level, it might be reasonable to deliver a system based on
a Design by Committee specification, if no variations (multiple
configurations) are required and the proposed implementation schedule is
extended by 30 percent or more. Most developers can manage only a few
variations, in platforms, databases, and feature sets.







#### Read next

[Swiss Army Knife []{.fa
.fa-arrow-right}](/antipatterns/swiss-army-knife){.btn .btn-primary
rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Warm Bodies](/antipatterns/warm-bodies){.btn
.btn-default rel="prev"}








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






