





[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [AntiPatterns](/antipatterns){.type} / [Software
Architecture
AntiPatterns](/antipatterns/software-architecture-antipatterns){.type}


# Stovepipe Enterprise {#stovepipe-enterprise .title}




## Stovepipe Enterprise

-   **AntiPattern Name:** Stovepipe Enterprise
-   **Also Known As:** Islands of Automation
-   **Most Frequent Scale:** Enterprise
-   **Refactored Solution Name:** Enterprise Architecture Planning
-   **Refactored Solution Type:** Process
-   **Root Causes:** Haste, Apathy, Narrow-Mindedness
-   **Unbalanced Forces:** Management of Change, Resources, Technology
    Transfer
-   **Anecdotal Evidence:** \"Can I have my own island (of
    automation)?\"

### Background

*Stovepipe* is a popular term used to describe software systems with ad
hoc architectures. It is a metaphor to the exhaust pipes of wood-burning
stoves, so-called pot-bellied stoves.

Since wood burning produces corrosive substances that erode metal, a
stovepipe must be constantly maintained and repaired in order to avoid
leakage. Often, the pipes are repaired with any materials at hand, thus
wood-burning stovepipes quickly become a hodgepodge of ad hoc
repairs---hence, the reference is used to describe the ad hoc structure
of many software systems.

### General Form

Multiple systems within an enterprise are designed independently at
every level. Lack of commonality inhibits interoperability between
systems, prevents reuse, and drives up cost; in addition, reinvented
system architecture and services lack quality structure supporting
adaptability.

At the lowest level are the standards and guidelines. These work like
architectural building codes and zoning laws across enterprise systems.
The next level up in the hierarchy is the operating environment , which
comprises infrastructure and object services.

The top two layers include the value-added functional services and the
mission-specific services. By selecting and defining all of these
technologies independently, Stovepipe Enterprises \"create islands of
automation,\" isolated from the rest of the enterprise.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Stovepipe%20Enterprise2%20-%201-2x.png?id=a4187348c627cac1112d87343dde2ba8"
class="2x" />
</figure>

### Symptoms And Consequences

-   Incompatible terminology, approaches, and technology between
    enterprise systems.
-   Brittle, monolithic system architectures and undocumented
    architectures.
-   Inability to extend systems to support business needs.
-   Incorrect use of a technology standard.
-   Lack of software reuse between enterprise systems.
-   Lack of interoperability between enterprise systems.
-   Inability of systems to interoperate even when using the same
    standards.
-   Excessive maintenance costs due to changing business requirements;
    the need to extend the system to incorporate new products and
    technologies.
-   Employee turnover, which causes project discontinuity and
    maintenance problems.

### Typical Causes

-   Lack of an enterprise technology strategy, specifically:

-   -   Lack of a standard reference model
    -   Lack of system profiles

-   Lack of incentive for cooperation across system developments

-   Lack of communication between system development projects.

-   Lack of knowledge of the technology standard being used.

-   Absence of horizontal interfaces in system integration solutions.

### Known Exceptions

The Stovepipe Enterprise AntiPattern is unacceptable for new systems at
an enterprise level in this day and age, particularly when most
companies are facing the need to extend their business systems. However,
when companies grow by takeover or merger, the Stovepipe AntiPattern is
likely to occur; in which case, wrapping some systems can be an
intermediate solution.

Another exception is when a common service layer is implemented across
the enterprise systems. This is usually a manifestation of the Vendor
Lock-In AntiPattern. These systems have a common horizontal component;
for example, in banking, this is often true of databases such as DB2 and
Oracle.

### Refactored Solution

Coordination of technologies at several levels is essential to avoid a
Stovepipe Enterprise. Initially, the selection of standards can be
coordinated through the definition of a standards reference model.

The standards reference model defines the common standards and a
migration direction for enterprise systems. The establishment of a
common operating environment coordinates the selection of products and
controls the configuration of product versions. Defining system profiles
that coordinate the utilization of products and standards is essential
to assure standards benefits, reuse, and interoperability. At least one
system profile should define usage conventions across systems.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Stovepipe%20Enterprise3%20-%201-2x.png?id=9c19de25ba13390b601be658e5811d22"
class="2x" loading="lazy" />
</figure>

Through much experience, large enterprises have worked out some useful
conventions for the definition of object-oriented architectures that can
apply to many organizations. A key challenge of large-scale architecture
is to define detailed interoperability conventions across systems while
addressing technology strategy and requirements. For very large
enterprises, experience has shown that four requirements models and four
specification models are necessary to properly scope and resolve
interoperability challenges.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Stovepipe%20Enterprise%20-%203-2x.png?id=17ebc91480fa7c6de8f452d4c1eb1066"
class="2x" loading="lazy" />
</figure>

The requirements models include:

1.  Open Systems Reference Model.
2.  Technology Profile.
3.  Operating Environment.
4.  System Requirements Profile.

The specification models include:

1.  Enterprise Architectures.
2.  Computational Facilities Architecture.
3.  Interoperability Specifications.
4.  Development Profile.

The following sections describe these models, each of which is part of
an overall enterprise-architecture plan. The plan provides effective
coordination between projects and reduces the need for point-to-point
interoperability solutions.

#### Open Systems Reference Model

An *open systems reference model* contains a high-level architecture
diagram and a list of target standards for system development projects.
The purpose of this model is to identify all of the candidate standards
for projects, to coordinate open-systems strategies.

An off-the-shelf reference model of this type is the IEEE POSIX 1003.0
standard. This section of POSIX lists a wide range of open systems
standards with respect to applicability, maturity, commercial support,
and other factors. This POSIX standard is the starting point for many
enterprise-specific reference models.

#### Technology Profile

When open-systems reference models were invented less than 10 years ago,
they were thought to be the complete answer to systems interoperability.
Unfortunately, developers were uncertain how these models affected their
projects. A key problem is that reference models define future
architecture goals with an unspecified time frame for implementation.
Also, approximately a third of the items change status every year, due
to the activities of standards bodies.

*Technology profiles* were invented to define the short-term standards
plan for systems developers. A technology profile is a concise list of
standards drawn from a reference model, which is considered a set of
flexible guidelines; but technology profiles often mandate standards for
current and new systems development projects.

The technology profile clarifies what the developer has to do about the
reference model standards; for example, the US-DOD Joint Technical
Architecture is a technical profile that identifies standards for
current implementation.

#### Operating Environment

Most large enterprises have heterogeneous hardware and software
architectures, but even with a consistent infrastructure, varying
installation practices can cause serious problems for enterprise
interoperability, software reuse, security, and systems management.

An *operating environment* defines product releases and installation
conventions that are supported by the enterprise, and establishes
guidelines that must be flexible locally, to support R&D and unique
systems requirements.

The enterprise can encourage compliance with these conventions through
technical support services and purchasing procedures; in other words,
the enterprise can influence the adoption of the recommended
environments by making them the easiest system configurations to obtain
and support. Variations from the operating environment must be supported
locally at extra cost.

#### System Requirements Profile

Enterprise architecture planning often produces broad, high-level
requirements documents. For any particular family of systems, the
requirements may be unclear to developers because of the sheer volume of
information. A *system requirements profile* is a summary of key
requirements for a family of related systems. The time frame is short
term. Ideally, this document is only a few dozen pages in length,
written to clarify the intended implementation goals for component
systems and application development projects.

The system requirements profile identifies necessary scoping of system
capabilities, and thus is the stepping-off point for enterprise
requirements planning. The balance of the enterprise planning models are
architecture and design specifications (described in subsequent
sections), which are expressed through object-oriented models and
comprise a set of object-oriented software architectures.

#### Enterprise Architecture

An *enterprise architecture* is a set of diagrams and tables that define
a system or family of systems from various stakeholder viewpoints; thus,
the enterprise architecture comprises views of the entire system.
Current and future time frames are depicted, and each view addresses the
issues posed by principal stakeholders, such as end users, developers,
systems operators, and technical specialists.

Consistency of the architecture views and notations across projects is
important, for enterprise architectures enable technical communication
across projects. Reuse and interoperability opportunities can be
identified when projects share their architectures. Since individual
projects have the most knowledge of the technical details,
project-specific architectures can be compiled into accurate,
enterprisewide architectures.

#### Computational Facilities Architecture

As just explained, enterprise architectures are important communication
tools for end users and architects. Each of the remaining specifications
detail the computational architecture that defines interfaces for
interoperability and reuse.

A *computational facilities architecture (CFA)* identifies and defines
key points of interoperability for a family of systems. Each facility
identifies a set of application program interfaces (APIs) and common
data objects that are defined in detail in the interoperability
specifications.

A CFA partitions the enterprise\'s interoperability needs into
manageable specifications; it also defines a road map of priorities and
schedules for the facilities. This is necessary to initiate and guide
the formulation of interoperability specifications.

Achieving consensus on the facilities in a CFA is a key challenge for
many enterprises. Misunderstandings abound regarding the role of the
facilities in relation to external requirements, the need for system
independence, the definition of common abstractions, and the necessity
of limiting the scope of the facilities.

#### Interoperability Specification

An *interoperability specification* defines the technical details of a
computational facility. Typical interoperability specifications include
APIs defined in IDL and common data object definitions.

Interoperability specifications establish key points of interoperability
in a manner that is independent of any particular system of subsystem
implementation. Architecture mining is a particularly effective process
for creating these specifications During system maintenance, the key
points of interoperability become value-added entry points for system
extension.

#### Development Profile

An interoperability specification alone is not enough to assure
successful integration, because the semantics of APIs can be interpreted
differently by different implementors. Robust API designs have built-in
flexibility that enable extension and reuse, and details of their usage
are often discovered in the development process. Some of these details
may be unique to a particular set of systems.

A *development profile* records the implementation plans and developer
agreements that are necessary to assure interoperability and successful
integration. A development profile identifies the parts of API
specifications that are used, local extensions to the specification, and
conventions that coordinate integration.

While it is important to configuration-control all of these models,
development profiles are working documents that evolve throughout
development and maintenance life cycles. Multiple development profiles
may exist for a single API specification, each of which addresses the
integration needs of a particular domain or family of systems.

### Example

System 1 and System 2 represent two Stovepipe Systems in the same
enterprise. While similar in many ways, these systems lack commonality;
they use different database products, different office automation tools,
have different software interfaces, and use unique graphical user
interfaces (GUIs). The potential commonalities between these systems was
not recognized and therefore not utilized by the designers and
developers.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Stovepipe%20Enterprise%20-%204-2x.png?id=38a3c84aa399460f6826c37ff24a158b"
class="2x" loading="lazy" />
</figure>

To resolve the AntiPattern, the enterprise starts by defining a
standards reference model. This model, selects some baseline standards
for interchange across all systems. The next step is to choose products
for an operating environment. In this case, both database products are
selected, but only one of the office automation tools.

This is the supported direction for future migration of the enterprise.
The enterprise can facilitate this operating environment through
enterprise product licensing, training, and technical support. This
level also defines profiles for use of these technologies and common
interfaces with reusable service implementations. The GUI applications
comprise the remaining system-specific implementations.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Stovepipe%20Enterprise%20-%205-2x.png?id=332febec4a445f0f53d4f2cf2e7341ee"
class="2x" loading="lazy" />
</figure>

### Related Solutions

Reinvent the Wheel is an AntiPattern that comprises a subset of the
overall problem of Stovepipe Systems. Reinvent the Wheel is focused upon
the lack of maturity of designs and implementations caused by the lack
of communication between development projects.

Standards reference model, operating environment, and profile are
solutions from the book *CORBA Design Patterns* They are all important
components in the solution of Stovepipe Enterprises.

Examples of standards reference models include the IEEE POSIX.0, NIST
Application

### Applicability To Other Viewpoints And Scales

Stovepipe Enterprises are often the consequence of organizational
boundaries imposed by management. Organizational structures that inhibit
communication and the transfer of technology produce the kind of
disconnects that result in the lack of coordination that characterizes
Stovepipe Enterprises.

The impact of the Stovepipe Enterprise AntiPattern on management is that
every system development involves significant but unnecessary risk and
cost. Since the systems do not interoperate and are difficult to
integrate, the overall organizational effectiveness is impacted.

The organization\'s ability to accommodate changing business
requirements is greatly impeded by the Stovepipe Enterprise. An emerging
requirement for enterprises is called *agile systems,* which are able to
accommodate changes in business processes because they already support
interoperability across most or all enterprise systems.

Developers, too, are affected by the Stovepipe Enterprise because they
are often asked to create brittle solutions to bridge independently
architected systems. These interfaces are difficult to maintain and
reuse, and the absence of technology coordination makes the creation of
these interfaces quite challenging. Often, combinations of middleware
solutions and commercial products (database engines) must be bridged in
order to achieve interoperability.







#### Read next

[Jumble []{.fa .fa-arrow-right}](/antipatterns/jumble){.btn .btn-primary
rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Autogenerated
Stovepipe](/antipatterns/autogenerated-stovepipe){.btn .btn-default
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






