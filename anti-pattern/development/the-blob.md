





[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [AntiPatterns](/antipatterns){.type} / [Software
Development
AntiPatterns](/antipatterns/software-development-antipatterns){.type}


# The Blob {#the-blob .title}




-   **AntiPattern Name:** The Blob
-   **Also Known As:** Winnebago and The God Class
-   **Most Frequent Scale:** Application
-   **Refactored Solution Name:** Refactoring of Responsibilities
-   **Refactored Solution Type:** Software
-   **Root Causes:** Sloth, Haste
-   **Unbalanced Forces:** Management of Functionality, Performance,
    Complexity
-   **Anecdotal Evidence:** \"This is the class that is really the
    *heart* of our architecture.\"

### Background

Do you remember the original black-and-white movie The Blob? Perhaps you
saw only the recent remake. In either case, the story line was almost
the same: A drip-sized, jellylike alien life form from outer space
somehow makes it to Earth.

Whenever the jelly thing eats (usually unsuspecting earthlings), it
grows. Meanwhile, incredulous earthlings panic and ignore the one crazy
scientist who knows what\'s happening. Many more people are eaten before
they come to their senses. Eventually, the Blob grows so large that it
threatens to wipe out the entire planet.

The movie is a good analogy for the Blob AntiPattern, which has been
known to consume entire object-oriented architectures.

<figure class="image">
<img
src="/files/v2/content/antipatterns/blob-2x.png?id=86b0a1c47c3a471356ebd025b8384886"
class="2x" />
</figure>

### General Form

The Blob is found in designs where one class monopolizes the processing,
and other classes primarily encapsulate data. This AntiPattern is
characterized by a class diagram composed of a single complex controller
class surrounded by simple data classes. The key problem here is that
the majority of the responsibilities are allocated to a single class.

In general, the Blob is a procedural design even though it may be
represented using object notations and implemented in object-oriented
languages. A procedural design separates process from data, whereas an
object-oriented design merges process and data models, along with
partitions.

The Blob contains the majority of the process, and the other objects
contain the data. Architectures with the Blob have separated process
from data; in other words, they are procedural-style rather than
object-oriented architectures.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Blob%20-%202-2x.png?id=4ad572c621db62e13772345498d1e59e"
class="2x" loading="lazy" />
</figure>

The Blob can be the result of inappropriate requirements allocation. For
example, the Blob may be a software module that is given
responsibilities that overlap most other parts of the system for system
control or system management.

The Blob is also frequently a result of iterative development where
proof-of-concept code evolves over time into a prototype, and
eventually, a production system. This is often exacerbated by the use of
primarily GUI-centric programming languages, such as Visual Basic, that
allow a simple form to evolve its functionality, and therefore purpose,
during incremental development or prototyping.

The allocation of responsibilities is not repartitioned during system
evolution, so that one module becomes predominant. The Blob is often
accompanied by unnecessary code, making it hard to differentiate between
the useful functionality of the Blob Class and no-longer-used code (see
the Lava Flow AntiPattern).

### Symptoms And Consequences

-   Single class with a large number of attributes, operations, or both.
    A class with 60 or more attributes and operations usually indicates
    the presence of the Blob
-   A disparate collection of unrelated attributes and operations
    encapsulated in a single class. An overall lack of cohesiveness of
    the attributes and operations is typical of the Blob.
-   A single controller class with associated simple, data-object
    classes.
-   An absence of object-oriented design. A program main loop inside the
    Blob class associated with relatively passive data objects. The
    single controller class often nearly encapsulates the applications
    entire functionality, much like a procedural main program.
-   A migrated legacy design that has not been properly refactored into
    an object-oriented architecture.
-   The Blob compromises the inherent advantages of an object-oriented
    design. For example, The Blob limits the ability to modify the
    system without affecting the functionality of other encapsulated
    objects. Modifications to the Blob affect the extensive software
    within the Blob\'s encapsulation. Modifications to other objects in
    the system are also likely to have impact on the Blob\'s software.
-   The Blob Class is typically too complex for reuse and testing. It
    may be inefficient, or introduce excessive complexity to reuse the
    Blob for subsets of its functionality.
-   The Blob Class may be expensive to load into memory, using excessive
    resources, even for simple operations.

### Typical Causes

-   *Lack of an object-oriented architecture.* The designers may not
    have an adequate understanding of object-oriented principles.
    Alternatively, the team may lack appropriate abstraction skills.
-   *Lack of (any) architecture.* The absence of definition of the
    system components, their interactions, and the specific use of the
    selected programming languages. This allows programs to evolve in an
    ad hoc fashion because the programming languages are used for other
    than their intended purposes.
-   *Lack of architecture enforcement.* Sometimes this AntiPattern grows
    accidentally, even after a reasonable architecture was planned. This
    may be the result of inadequate architectural review as development
    takes place. This is especially prevalent with development teams new
    to object orientation.
-   *Too limited intervention.* In iterative projects, developers tend
    to add little pieces of functionality to existing working classes,
    rather than add new classes, or revise the class hierarchy for more
    effective allocation of responsibilities.
-   *Specified disaster.* Sometimes the Blob results from the way
    requirements are specified. If the requirements dictate a procedural
    solution, then architectural commitments may be made during
    requirements analysis that are difficult to change. Defining system
    architecture as part of requirements analysis is usually
    inappropriate, and often leads to the Blob AntiPattern, or worse.

### Known Exceptions

The Blob AntiPattern is acceptable when wrapping legacy systems. There
is no software partitioning required, just a final layer of code to make
the legacy system more accessible.

### Refactored Solution

As with most of the AntiPatterns in this section, the solution involves
a form of refactoring. The key is to move behavior away from the Blob.
It may be appropriate to reallocate behavior to some of the encapsulated
data objects in a way that makes these objects more capable and the Blob
less complex. The method for refactoring responsibilities is described
as follows:

1.  Identify or categorize related attributes and operations according
    to contracts. These contracts should be cohesive in that they all
    directly relate to a common focus, behavior, or function within the
    overall system. For example, a library system architecture diagram
    is represented with a potential Blob class called LIBRARY.

    In the example shown in figure 1, the LIBRARY class encapsulates the
    sum total of all the system\'s functionality. Therefore, the first
    step is to identify cohesive sets of operations and attributes that
    represent contracts. In this case, we could gather operations
    related to catalog management, like Sort_Catalog and Search_Catalog.

    We could also identify all operations and attributes related to
    individual items, such as Print_Item, Delete_Item, and so on.

    
    ![](/files/v2/content/antipatterns/Blob2%20-%203-2x.png?id=9e54f4b742935dbfb39f4a569070a852){.2x}
    Figure 1
    

    
    ![](/files/v2/content/antipatterns/Blob2%20-%204-2x.png?id=a65b4187b64962b00c0d65e745369a3c){.2x}
    Figure 2
    

2.  The second step is to look for \"natural homes\" for these
    contract-based collections of functionality and then migrate them
    there. In this example, we gather operations related to catalogs and
    migrate them from the LIBRARY class and move them to the CATALOG
    class.

    We do the same with operations and attributes related to items,
    moving them to the ITEM class. This both simplifies the LIBRARY
    class and makes the ITEM and CATALOG classes more than simple
    encapsulated data tables. The result is a better object-oriented
    design.

    
    ![](/files/v2/content/antipatterns/Blob2%20-%205-2x.png?id=0deeb967f6e01e0336d8650d219a24c5){.2x}
    Figure 3
    

3.  The third step is to remove all \"far-coupled,\" or redundant,
    indirect associations. In the example, the ITEM class is initially
    far-coupled to the LIBRARY class in that each item really belongs to
    a CATALOG, which in turn belongs to a LIBRARY.

4.  Next, where appropriate, we migrate associates to derived classes to
    a common base class. In the example, once the far-coupling has been
    removed between the LIBRARY and ITEM classes, we need to migrate
    ITEMs to CATALOGs, as shown in figure 4.

    
    ![](/files/v2/content/antipatterns/Blob2%20-%206-2x.png?id=4bbc24b13c263804da362cd47feb0acc){.2x}
    Figure 4
    

5.  Finally, we remove all transient associations, replacing them as
    appropriate with type specifiers to attributes and operations
    arguments.

    In our example, a Check_Out_Item or a Search_For_Item would be a
    transient process, and could be moved into a separate transient
    class with local attributes that establish the specific location or
    search criteria for a specific instance of a check-out or search.

### Variations

Sometimes, with a system composed of the Blob class and its supporting
data objects, too much work has been invested to enable a refactoring of
the class architecture. An alternative approach may be available that
provides an \"80%\" solution.

Instead of a bottom-up refactoring of the entire class hierarchy, it may
be possible to reduce the Blob class from a controller to a coordinator
class. The original Blob class manages the system\'s functionality; the
data classes are extended with some of their own processing.

The data classes operate at the direction of the modified coordinator
class. This process may allow the retention of the original class
hierarchy, except for the migrations of processing functionality from
the Blob class to some of the encapsulated data classes.

Riel identifies two major forms of the Blob AntiPattern. He calls these
two forms God Classes: *Behavioral Form* and *Data Form*

The Behavioral Form is an object that contains a centralized process
that interacts with most other parts of the system. The Data Form is an
object that contains shared data used by most other objects in the
system. Riel introduces a number of object-oriented heuristics for
detect ing and refactoring God Class designs.

### Applicability To Other Viewpoints And Scales

Both architectural and managerial viewpoints play key roles in the
initial prevention of the Blob AntiPattern. Avoidance of the Blob may
require ongoing policing of the architecture to assure adequate
distribution of responsibilities.

It is through an architectural viewpoint that an emerging Blob is
recognized. With a mature object-oriented analysis and design process,
and an alert manager who understands the design, developers can prevent
the cultivation of a Blob.

The most important factor is that, in most cases, it\'s much less
expensive to create appropriate design than to rework design after
implementation. Up-front investment in good architecture and team
education can ensure a project against the Blob and most other
AntiPatterns.

Ask any insurance salesperson, and he or she may tell you that most
insurance is purchased *after* it was needed by people who are poorer
but wiser.

### Example

A GUI module that is intended to interface to a processing module
gradually takes on the processing functionality of background-processing
modules. An example of this is a PowerBuilder screen for customer data
entry/retrieval. The screen can:

1.  Display data.

2.  Edit data.

3.  Perform simple type validation. The developer then adds
    functionality to what was intended to be the decision engine:

4.  -   Complex validation.
    -   Algorithms that use the validated data to assess next actions.

5.  The developer then gets new requirements to:

6.  -   Extend the GUI to three forms.
    -   Make it script-driven (including the development of a script
        engine).
    -   Add new algorithms to the decision engine.

The developer extends the current module to incorporate all of this
functionality. So instead of developing several modules, a single module
is developed. If the intended application is architected and designed,
it is easier to maintain and extend.

<figure class="image">
<img
src="/files/v2/content/antipatterns/Blob3%20-%201-2x.png?id=bd6432eead66d53bebe7fa5fa823057d"
class="2x" loading="lazy" />
</figure>

<figure class="image">
<img
src="/files/v2/content/antipatterns/Blob3%20-%202-2x.png?id=12ef32a85a200658b0f915a06ecdfffb"
class="2x" loading="lazy" />
</figure>







#### Read next

[Continuous Obsolescence []{.fa
.fa-arrow-right}](/antipatterns/continuous-obsolescence){.btn
.btn-primary rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Software Development
AntiPatterns](/antipatterns/software-development-antipatterns){.btn
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






