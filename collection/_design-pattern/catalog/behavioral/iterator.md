



[![](/images/content-public/ann/autumn/read.svg?id=0d119719d4d53f2e62fc6535cb544b74){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}
![](/images/content-public/ann/autumn/tea-cup.svg?id=f95aba0fef52083e2dd0a8a64068e37f){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"} [Autumn
SALE]{.announcement-link-text}
![](/images/content-public/ann/autumn/mulled-wine.svg?id=ad4bec48a83ede3e72766d40a6a837ed){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}
![](/images/content-public/ann/autumn/maple-leaf.svg?id=63cdc79ea962a2657a57f44a22d092b9){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}](/store)





[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [Design Patterns](/design-patterns){.type} / [Behavioral
Patterns](/design-patterns/behavioral-patterns){.type}


# Iterator {#iterator .title}


##  Intent

**Iterator** is a behavioral design pattern that lets you traverse
elements of a collection without exposing its underlying representation
(list, stack, tree, etc.).

<figure class="image">
<img
src="/images/patterns/content/iterator/iterator-en.png?id=d19123d71d355d01b0ede4be173eb695"
srcset="/images/patterns/content/iterator/iterator-en-2x.png?id=2a85705e8e5fab257802b2ce36d6d236 2x"
width="640" alt="Iterator design pattern" />
</figure>



##  Problem

Collections are one of the most used data types in programming.
Nonetheless, a collection is just a container for a group of objects.

<figure class="image">
<img
src="/images/patterns/diagrams/iterator/problem1.png?id=52ef2fe2d4920e3fed696c221fe757f2"
srcset="/images/patterns/diagrams/iterator/problem1-2x.png?id=1f4384c3c631be238bfc23d6eb84a0ef 2x"
loading="lazy" width="490" alt="Various types of collections" />
<figcaption><p>Various types of collections.</p></figcaption>
</figure>

Most collections store their elements in simple lists. However, some of
them are based on stacks, trees, graphs and other complex data
structures.

But no matter how a collection is structured, it must provide some way
of accessing its elements so that other code can use these elements.
There should be a way to go through each element of the collection
without accessing the same elements over and over.

This may sound like an easy job if you have a collection based on a
list. You just loop over all of the elements. But how do you
sequentially traverse elements of a complex data structure, such as a
tree? For example, one day you might be just fine with depth-first
traversal of a tree. Yet the next day you might require breadth-first
traversal. And the next week, you might need something else, like random
access to the tree elements.

<figure class="image">
<img
src="/images/patterns/diagrams/iterator/problem2.png?id=f9c1a746c787320291c85fdc2a314192"
srcset="/images/patterns/diagrams/iterator/problem2-2x.png?id=656b13c109d4d4960ea1f9fa993bae4c 2x"
loading="lazy" width="600" alt="Various traversal algorithms" />
<figcaption><p>The same collection can be traversed in several
different ways.</p></figcaption>
</figure>

Adding more and more traversal algorithms to the collection gradually
blurs its primary responsibility, which is efficient data storage.
Additionally, some algorithms might be tailored for a specific
application, so including them into a generic collection class would be
weird.

On the other hand, the client code that's supposed to work with various
collections may not even care how they store their elements. However,
since collections all provide different ways of accessing their
elements, you have no option other than to couple your code to the
specific collection classes.



##  Solution

The main idea of the Iterator pattern is to extract the traversal
behavior of a collection into a separate object called an *iterator*.

<figure class="image">
<img
src="/images/patterns/diagrams/iterator/solution1.png?id=2f5fbcce6099d8ea09b2fbb83e3e7059"
srcset="/images/patterns/diagrams/iterator/solution1-2x.png?id=dcebcad4c197bfa5f25f680382d0e5ac 2x"
loading="lazy" width="400"
alt="Iterators implement various traversal algorithms" />
<figcaption><p>Iterators implement various traversal algorithms. Several
iterator objects can traverse the same collection at the
same time.</p></figcaption>
</figure>

In addition to implementing the algorithm itself, an iterator object
encapsulates all of the traversal details, such as the current position
and how many elements are left till the end. Because of this, several
iterators can go through the same collection at the same time,
independently of each other.

Usually, iterators provide one primary method for fetching elements of
the collection. The client can keep running this method until it doesn't
return anything, which means that the iterator has traversed all of the
elements.

All iterators must implement the same interface. This makes the client
code compatible with any collection type or any traversal algorithm as
long as there's a proper iterator. If you need a special way to traverse
a collection, you just create a new iterator class, without having to
change the collection or the client.



##  Real-World Analogy {#analogy}

<figure class="image">
<img
src="/images/patterns/content/iterator/iterator-comic-1-en.png?id=fa30f5a944179e6fb12203fef5d5ed9d"
srcset="/images/patterns/content/iterator/iterator-comic-1-en-2x.png?id=b90df2dbda9280336db189924683e121 2x"
loading="lazy" width="640" alt="Various ways to walk around Rome" />
<figcaption><p>Various ways to walk around Rome.</p></figcaption>
</figure>

You plan to visit Rome for a few days and visit all of its main sights
and attractions. But once there, you could waste a lot of time walking
in circles, unable to find even the Colosseum.

On the other hand, you could buy a virtual guide app for your smartphone
and use it for navigation. It's smart and inexpensive, and you could be
staying at some interesting places for as long as you want.

A third alternative is that you could spend some of the trip's budget
and hire a local guide who knows the city like the back of his hand. The
guide would be able to tailor the tour to your likings, show you every
attraction and tell a lot of exciting stories. That'll be even more fun;
but, alas, more expensive, too.

All of these options---the random directions born in your head, the
smartphone navigator or the human guide---act as iterators over the vast
collection of sights and attractions located in Rome.



##  Structure



<figure class="image">
<img
src="/images/patterns/diagrams/iterator/structure.png?id=35ea851f8f6bbe51d79eb91e6e6519d0"
class="structure-img-non-indexed d-none d-xl-block"
srcset="/images/patterns/diagrams/iterator/structure-2x.png?id=b7b4708d3f279dd046eb1692f1cba710 2x"
loading="lazy" width="480"
alt="Structure of the Iterator design pattern" /><img
src="/images/patterns/diagrams/iterator/structure-indexed.png?id=7bc28907ff6b480db6635a93ebaa10ff"
class="structure-img-indexed d-xl-none"
srcset="/images/patterns/diagrams/iterator/structure-indexed-2x.png?id=d809428b2262e2013972fe69d2434473 2x"
loading="lazy" width="520"
alt="Structure of the Iterator design pattern" />
</figure>


1.  The **Iterator** interface declares the operations required for
    traversing a collection: fetching the next element, retrieving the
    current position, restarting iteration, etc.

2.  **Concrete Iterators** implement specific algorithms for traversing
    a collection. The iterator object should track the traversal
    progress on its own. This allows several iterators to traverse the
    same collection independently of each other.

3.  The **Collection** interface declares one or multiple methods for
    getting iterators compatible with the collection. Note that the
    return type of the methods must be declared as the iterator
    interface so that the concrete collections can return various kinds
    of iterators.

4.  **Concrete Collections** return new instances of a particular
    concrete iterator class each time the client requests one. You might
    be wondering, where's the rest of the collection's code? Don't
    worry, it should be in the same class. It's just that these details
    aren't crucial to the actual pattern, so we're omitting them.

5.  The **Client** works with both collections and iterators via their
    interfaces. This way the client isn't coupled to concrete classes,
    allowing you to use various collections and iterators with the same
    client code.

    Typically, clients don't create iterators on their own, but instead
    get them from collections. Yet, in certain cases, the client can
    create one directly; for example, when the client defines its own
    special iterator.




##  Pseudocode

In this example, the **Iterator** pattern is used to walk through a
special kind of collection which encapsulates access to Facebook's
social graph. The collection provides several iterators that can
traverse profiles in various ways.

<figure class="image">
<img
src="/images/patterns/diagrams/iterator/example.png?id=f2a24ef3787bf80ed450709240506ff2"
srcset="/images/patterns/diagrams/iterator/example-2x.png?id=73c3e55f75ca0250bd84e8a1d8cc88d2 2x"
loading="lazy" width="600"
alt="Structure of the Iterator pattern example" />
<figcaption><p>Example of iterating over
social profiles.</p></figcaption>
</figure>

The 'friends' iterator can be used to go over the friends of a given
profile. The 'colleagues' iterator does the same, except it omits
friends who don't work at the same company as a target person. Both
iterators implement a common interface which allows clients to fetch
profiles without diving into implementation details such as
authentication and sending REST requests.

The client code isn't coupled to concrete classes because it works with
collections and iterators only through interfaces. If you decide to
connect your app to a new social network, you simply need to provide new
collection and iterator classes without changing the existing code.

<figure class="code">
<pre class="code" lang="pseudocode"><code>// The collection interface must declare a factory method for
// producing iterators. You can declare several methods if there
// are different kinds of iteration available in your program.
interface SocialNetwork is
    method createFriendsIterator(profileId):ProfileIterator
    method createCoworkersIterator(profileId):ProfileIterator


// Each concrete collection is coupled to a set of concrete
// iterator classes it returns. But the client isn&#39;t, since the
// signature of these methods returns iterator interfaces.
class Facebook implements SocialNetwork is
    // ... The bulk of the collection&#39;s code should go here ...

    // Iterator creation code.
    method createFriendsIterator(profileId) is
        return new FacebookIterator(this, profileId, &quot;friends&quot;)
    method createCoworkersIterator(profileId) is
        return new FacebookIterator(this, profileId, &quot;coworkers&quot;)


// The common interface for all iterators.
interface ProfileIterator is
    method getNext():Profile
    method hasMore():bool


// The concrete iterator class.
class FacebookIterator implements ProfileIterator is
    // The iterator needs a reference to the collection that it
    // traverses.
    private field facebook: Facebook
    private field profileId, type: string

    // An iterator object traverses the collection independently
    // from other iterators. Therefore it has to store the
    // iteration state.
    private field currentPosition
    private field cache: array of Profile

    constructor FacebookIterator(facebook, profileId, type) is
        this.facebook = facebook
        this.profileId = profileId
        this.type = type

    private method lazyInit() is
        if (cache == null)
            cache = facebook.socialGraphRequest(profileId, type)

    // Each concrete iterator class has its own implementation
    // of the common iterator interface.
    method getNext() is
        if (hasMore())
            result = cache[currentPosition]
            currentPosition++
            return result

    method hasMore() is
        lazyInit()
        return currentPosition &lt; cache.length


// Here is another useful trick: you can pass an iterator to a
// client class instead of giving it access to a whole
// collection. This way, you don&#39;t expose the collection to the
// client.
//
// And there&#39;s another benefit: you can change the way the
// client works with the collection at runtime by passing it a
// different iterator. This is possible because the client code
// isn&#39;t coupled to concrete iterator classes.
class SocialSpammer is
    method send(iterator: ProfileIterator, message: string) is
        while (iterator.hasMore())
            profile = iterator.getNext()
            System.sendEmail(profile.getEmail(), message)


// The application class configures collections and iterators
// and then passes them to the client code.
class Application is
    field network: SocialNetwork
    field spammer: SocialSpammer

    method config() is
        if working with Facebook
            this.network = new Facebook()
        if working with LinkedIn
            this.network = new LinkedIn()
        this.spammer = new SocialSpammer()

    method sendSpamToFriends(profile) is
        iterator = network.createFriendsIterator(profile.getId())
        spammer.send(iterator, &quot;Very important message&quot;)

    method sendSpamToCoworkers(profile) is
        iterator = network.createCoworkersIterator(profile.getId())
        spammer.send(iterator, &quot;Very important message&quot;)</code></pre>
</figure>



##  Applicability



Use the Iterator pattern when your collection has a complex data
structure under the hood, but you want to hide its complexity from
clients (either for convenience or security reasons).



The iterator encapsulates the details of working with a complex data
structure, providing the client with several simple methods of accessing
the collection elements. While this approach is very convenient for the
client, it also protects the collection from careless or malicious
actions which the client would be able to perform if working with the
collection directly.



Use the pattern to reduce duplication of the traversal code across your
app.



The code of non-trivial iteration algorithms tends to be very bulky.
When placed within the business logic of an app, it may blur the
responsibility of the original code and make it less maintainable.
Moving the traversal code to designated iterators can help you make the
code of the application more lean and clean.



Use the Iterator when you want your code to be able to traverse
different data structures or when types of these structures are unknown
beforehand.



The pattern provides a couple of generic interfaces for both collections
and iterators. Given that your code now uses these interfaces, it'll
still work if you pass it various kinds of collections and iterators
that implement these interfaces.





##  How to Implement {#checklist}

1.  Declare the iterator interface. At the very least, it must have a
    method for fetching the next element from a collection. But for the
    sake of convenience you can add a couple of other methods, such as
    fetching the previous element, tracking the current position, and
    checking the end of the iteration.

2.  Declare the collection interface and describe a method for fetching
    iterators. The return type should be equal to that of the iterator
    interface. You may declare similar methods if you plan to have
    several distinct groups of iterators.

3.  Implement concrete iterator classes for the collections that you
    want to be traversable with iterators. An iterator object must be
    linked with a single collection instance. Usually, this link is
    established via the iterator's constructor.

4.  Implement the collection interface in your collection classes. The
    main idea is to provide the client with a shortcut for creating
    iterators, tailored for a particular collection class. The
    collection object must pass itself to the iterator's constructor to
    establish a link between them.

5.  Go over the client code to replace all of the collection traversal
    code with the use of iterators. The client fetches a new iterator
    object each time it needs to iterate over the collection elements.



##  Pros and Cons {#pros-cons}



-    *Single Responsibility Principle*. You can clean up the client code
    and the collections by extracting bulky traversal algorithms into
    separate classes.
-    *Open/Closed Principle*. You can implement new types of collections
    and iterators and pass them to existing code without breaking
    anything.
-    You can iterate over the same collection in parallel because each
    iterator object contains its own iteration state.
-    For the same reason, you can delay an iteration and continue it
    when needed.



-    Applying the pattern can be an overkill if your app only works with
    simple collections.
-    Using an iterator may be less efficient than going through elements
    of some specialized collections directly.





##  Relations with Other Patterns {#relations}

-   You can use [Iterators](/design-patterns/iterator) to traverse
    [Composite](/design-patterns/composite) trees.

-   You can use [Factory Method](/design-patterns/factory-method) along
    with [Iterator](/design-patterns/iterator) to let collection
    subclasses return different types of iterators that are compatible
    with the collections.

-   You can use [Memento](/design-patterns/memento) along with
    [Iterator](/design-patterns/iterator) to capture the current
    iteration state and roll it back if necessary.

-   You can use [Visitor](/design-patterns/visitor) along with
    [Iterator](/design-patterns/iterator) to traverse a complex data
    structure and execute some operation over its elements, even if they
    all have different classes.



##  Code Examples {#implementations}

[![Iterator in
C#](/images/patterns/icons/csharp.svg?id=da64592defc6e86d57c39c66e9de3e58){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/csharp/example "Iterator in C#"){.prog-lang-link}
[![Iterator in
C++](/images/patterns/icons/cpp.svg?id=f7782ed8b8666246bfcc3f8fefc3b858){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/cpp/example "Iterator in C++"){.prog-lang-link}
[![Iterator in
Go](/images/patterns/icons/go.svg?id=1a89927eb99b1ea3fde7701d97970aca){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/go/example "Iterator in Go"){.prog-lang-link}
[![Iterator in
Java](/images/patterns/icons/java.svg?id=e6d87e2dca08c953fe3acd1275ed4f4e){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/java/example "Iterator in Java"){.prog-lang-link}
[![Iterator in
PHP](/images/patterns/icons/php.svg?id=be1906eb26b71ec1d3b93720d6156618){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/php/example "Iterator in PHP"){.prog-lang-link}
[![Iterator in
Python](/images/patterns/icons/python.svg?id=6d815d43c0f7050a1151b43e51569c9f){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/python/example "Iterator in Python"){.prog-lang-link}
[![Iterator in
Ruby](/images/patterns/icons/ruby.svg?id=b065b718c914bf8e960ef731600be1eb){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/ruby/example "Iterator in Ruby"){.prog-lang-link}
[![Iterator in
Rust](/images/patterns/icons/rust.svg?id=1f5698a4b5ae23fe79413511747e4a87){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/rust/example "Iterator in Rust"){.prog-lang-link}
[![Iterator in
Swift](/images/patterns/icons/swift.svg?id=0b716c2d52ec3a48fbe91ac031070c1d){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/swift/example "Iterator in Swift"){.prog-lang-link}
[![Iterator in
TypeScript](/images/patterns/icons/typescript.svg?id=2239d0f16cb703540c205dd8cb0c0cb7){width="53"
height="53"
loading="lazy"}](/design-patterns/iterator/typescript/example "Iterator in TypeScript"){.prog-lang-link}





[![](/images/patterns/banners/patterns-book-banner-3.png?id=7d445df13c80287beaab234b4f3b698c){width="200"
height="200" loading="lazy"
srcset="/images/patterns/banners/patterns-book-banner-3-2x.png?id=0cc3f77ab421d1a5c02ee46488231c3a 2x"}](/design-patterns/book)



### Support our free website and own the eBook! {#support-our-free-website-and-own-the-ebook .title}

-   22 design patterns and 8 principles explained in depth.
-   409 well-structured, easy to read, jargon-free pages.
-   225 clear and helpful illustrations and diagrams.
-   An archive with code examples in 11 languages.
-   All devices supported: PDF/EPUB/MOBI/KFX formats.

[ Learn more...](/design-patterns/book){.btn .btn-secondary}





#### Read next

[Mediator []{.fa .fa-arrow-right}](/design-patterns/mediator){.btn
.btn-primary rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Command](/design-patterns/command){.btn
.btn-default rel="prev"}







[![](/images/patterns/book/web-cover-en.png?id=328861769fd11617674e3b8a7e2dd9e7){width="250"
height="375" loading="lazy"
srcset="/images/patterns/book/web-cover-en-2x.png?id=02940141c5652ed5a426d87390b16366 2x"}](/design-patterns/book)




This article is a part of our eBook\
**Dive Into Design Patterns**.

[ Learn more...](/design-patterns/book){.btn .btn-secondary .btn-block}











[![Refactoring.Guru](/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34){width="200"
height="241" loading="lazy"
srcset="/images/content-public/logos/logo-new-2x.png?id=3bc33294e095bab1d6fe9ae421d07837 2x"}](/){.menu-brand}


-   [ Premium Content](/store)
    -   [ Design Patterns eBook](/design-patterns/book)
    -   [ Refactoring Course](/refactoring/course)
-   [ Refactoring](/refactoring)
    -   [What is Refactoring](/refactoring/what-is-refactoring)
        -   [Clean code](/refactoring/what-is-refactoring)
        -   [Technical debt](/refactoring/technical-debt)
        -   [When to refactor](/refactoring/when)
        -   [How to refactor](/refactoring/how-to)
    -   [Catalog](/refactoring/catalog)
    -   [Code Smells](/refactoring/smells)
        -   [Bloaters](/refactoring/smells/bloaters)
            -   [Long Method](/smells/long-method)
            -   [Large Class](/smells/large-class)
            -   [Primitive Obsession](/smells/primitive-obsession)
            -   [Long Parameter List](/smells/long-parameter-list)
            -   [Data Clumps](/smells/data-clumps)
        -   [Object-Orientation Abusers](/refactoring/smells/oo-abusers)
            -   [Switch Statements](/smells/switch-statements)
            -   [Temporary Field](/smells/temporary-field)
            -   [Refused Bequest](/smells/refused-bequest)
            -   [Alternative Classes with Different
                Interfaces](/smells/alternative-classes-with-different-interfaces)
        -   [Change Preventers](/refactoring/smells/change-preventers)
            -   [Divergent Change](/smells/divergent-change)
            -   [Shotgun Surgery](/smells/shotgun-surgery)
            -   [Parallel Inheritance
                Hierarchies](/smells/parallel-inheritance-hierarchies)
        -   [Dispensables](/refactoring/smells/dispensables)
            -   [Comments](/smells/comments)
            -   [Duplicate Code](/smells/duplicate-code)
            -   [Lazy Class](/smells/lazy-class)
            -   [Data Class](/smells/data-class)
            -   [Dead Code](/smells/dead-code)
            -   [Speculative Generality](/smells/speculative-generality)
        -   [Couplers](/refactoring/smells/couplers)
            -   [Feature Envy](/smells/feature-envy)
            -   [Inappropriate Intimacy](/smells/inappropriate-intimacy)
            -   [Message Chains](/smells/message-chains)
            -   [Middle Man](/smells/middle-man)
        -   [Other Smells](/refactoring/smells/other)
            -   [Incomplete Library
                Class](/smells/incomplete-library-class)
    -   [Refactorings](/refactoring/techniques)
        -   [Composing
            Methods](/refactoring/techniques/composing-methods)
            -   [Extract Method](/extract-method)
            -   [Inline Method](/inline-method)
            -   [Extract Variable](/extract-variable)
            -   [Inline Temp](/inline-temp)
            -   [Replace Temp with Query](/replace-temp-with-query)
            -   [Split Temporary Variable](/split-temporary-variable)
            -   [Remove Assignments to
                Parameters](/remove-assignments-to-parameters)
            -   [Replace Method with Method
                Object](/replace-method-with-method-object)
            -   [Substitute Algorithm](/substitute-algorithm)
        -   [Moving Features between
            Objects](/refactoring/techniques/moving-features-between-objects)
            -   [Move Method](/move-method)
            -   [Move Field](/move-field)
            -   [Extract Class](/extract-class)
            -   [Inline Class](/inline-class)
            -   [Hide Delegate](/hide-delegate)
            -   [Remove Middle Man](/remove-middle-man)
            -   [Introduce Foreign Method](/introduce-foreign-method)
            -   [Introduce Local Extension](/introduce-local-extension)
        -   [Organizing Data](/refactoring/techniques/organizing-data)
            -   [Self Encapsulate Field](/self-encapsulate-field)
            -   [Replace Data Value with
                Object](/replace-data-value-with-object)
            -   [Change Value to Reference](/change-value-to-reference)
            -   [Change Reference to Value](/change-reference-to-value)
            -   [Replace Array with Object](/replace-array-with-object)
            -   [Duplicate Observed Data](/duplicate-observed-data)
            -   [Change Unidirectional Association to
                Bidirectional](/change-unidirectional-association-to-bidirectional)
            -   [Change Bidirectional Association to
                Unidirectional](/change-bidirectional-association-to-unidirectional)
            -   [Replace Magic Number with Symbolic
                Constant](/replace-magic-number-with-symbolic-constant)
            -   [Encapsulate Field](/encapsulate-field)
            -   [Encapsulate Collection](/encapsulate-collection)
            -   [Replace Type Code with
                Class](/replace-type-code-with-class)
            -   [Replace Type Code with
                Subclasses](/replace-type-code-with-subclasses)
            -   [Replace Type Code with
                State/Strategy](/replace-type-code-with-state-strategy)
            -   [Replace Subclass with
                Fields](/replace-subclass-with-fields)
        -   [Simplifying Conditional
            Expressions](/refactoring/techniques/simplifying-conditional-expressions)
            -   [Decompose Conditional](/decompose-conditional)
            -   [Consolidate Conditional
                Expression](/consolidate-conditional-expression)
            -   [Consolidate Duplicate Conditional
                Fragments](/consolidate-duplicate-conditional-fragments)
            -   [Remove Control Flag](/remove-control-flag)
            -   [Replace Nested Conditional with Guard
                Clauses](/replace-nested-conditional-with-guard-clauses)
            -   [Replace Conditional with
                Polymorphism](/replace-conditional-with-polymorphism)
            -   [Introduce Null Object](/introduce-null-object)
            -   [Introduce Assertion](/introduce-assertion)
        -   [Simplifying Method
            Calls](/refactoring/techniques/simplifying-method-calls)
            -   [Rename Method](/rename-method)
            -   [Add Parameter](/add-parameter)
            -   [Remove Parameter](/remove-parameter)
            -   [Separate Query from
                Modifier](/separate-query-from-modifier)
            -   [Parameterize Method](/parameterize-method)
            -   [Replace Parameter with Explicit
                Methods](/replace-parameter-with-explicit-methods)
            -   [Preserve Whole Object](/preserve-whole-object)
            -   [Replace Parameter with Method
                Call](/replace-parameter-with-method-call)
            -   [Introduce Parameter
                Object](/introduce-parameter-object)
            -   [Remove Setting Method](/remove-setting-method)
            -   [Hide Method](/hide-method)
            -   [Replace Constructor with Factory
                Method](/replace-constructor-with-factory-method)
            -   [Replace Error Code with
                Exception](/replace-error-code-with-exception)
            -   [Replace Exception with
                Test](/replace-exception-with-test)
        -   [Dealing with
            Generalization](/refactoring/techniques/dealing-with-generalization)
            -   [Pull Up Field](/pull-up-field)
            -   [Pull Up Method](/pull-up-method)
            -   [Pull Up Constructor Body](/pull-up-constructor-body)
            -   [Push Down Method](/push-down-method)
            -   [Push Down Field](/push-down-field)
            -   [Extract Subclass](/extract-subclass)
            -   [Extract Superclass](/extract-superclass)
            -   [Extract Interface](/extract-interface)
            -   [Collapse Hierarchy](/collapse-hierarchy)
            -   [Form Template Method](/form-template-method)
            -   [Replace Inheritance with
                Delegation](/replace-inheritance-with-delegation)
            -   [Replace Delegation with
                Inheritance](/replace-delegation-with-inheritance)
-   [ Design Patterns](/design-patterns)
    -   [What is a Pattern](/design-patterns/what-is-pattern)
        -   [What\'s a design
            pattern?](/design-patterns/what-is-pattern)
        -   [History of patterns](/design-patterns/history)
        -   [Why should I learn
            patterns?](/design-patterns/why-learn-patterns)
        -   [Criticism of patterns](/design-patterns/criticism)
        -   [Classification of
            patterns](/design-patterns/classification)
    -   [Catalog](/design-patterns/catalog)
    -   [Creational Patterns](/design-patterns/creational-patterns)
        -   [Factory Method](/design-patterns/factory-method)
        -   [Abstract Factory](/design-patterns/abstract-factory)
        -   [Builder](/design-patterns/builder)
        -   [Prototype](/design-patterns/prototype)
        -   [Singleton](/design-patterns/singleton)
    -   [Structural Patterns](/design-patterns/structural-patterns)
        -   [Adapter](/design-patterns/adapter)
        -   [Bridge](/design-patterns/bridge)
        -   [Composite](/design-patterns/composite)
        -   [Decorator](/design-patterns/decorator)
        -   [Facade](/design-patterns/facade)
        -   [Flyweight](/design-patterns/flyweight)
        -   [Proxy](/design-patterns/proxy)
    -   [Behavioral Patterns](/design-patterns/behavioral-patterns)
        -   [Chain of
            Responsibility](/design-patterns/chain-of-responsibility)
        -   [Command](/design-patterns/command)
        -   [Iterator](/design-patterns/iterator)
        -   [Mediator](/design-patterns/mediator)
        -   [Memento](/design-patterns/memento)
        -   [Observer](/design-patterns/observer)
        -   [State](/design-patterns/state)
        -   [Strategy](/design-patterns/strategy)
        -   [Template Method](/design-patterns/template-method)
        -   [Visitor](/design-patterns/visitor)
    -   [Code Examples](/design-patterns/examples)
        -   [C#](/design-patterns/csharp)
        -   [C++](/design-patterns/cpp)
        -   [Go](/design-patterns/go)
        -   [Java](/design-patterns/java)
        -   [PHP](/design-patterns/php)
        -   [Python](/design-patterns/python)
        -   [Ruby](/design-patterns/ruby)
        -   [Rust](/design-patterns/rust)
        -   [Swift](/design-patterns/swift)
        -   [TypeScript](/design-patterns/typescript)



[ Log in](https://refactoring.guru/login "Log in") [ Contact
us](https://feedback.refactoring.guru/ "Contact us"){.userecho-public
rel="nofollow"}





[![Refactoring.Guru](/images/content-public/logos/logo-new-mobile.png?id=ea18aa9b032eaa92835ed6d472b03b4a){srcset="/images/content-public/logos/logo-new-mobile-2x.png?id=7ad5648bfd86ae2e8524147a72877c64 2x"}](/){.navigation-brand}


[![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgZmlsbDogY3VycmVudENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi10b3A6IC0xNHB4OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTEyIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM1NiA2MGw2MCAyMC02MCAyMC0yMCA2MC0yMC02MEwyNTYgODBsNjAtMjBMMzM2IDBsMjAgNjB6TTQ2NCAyMDhsNDggMTYtNDggMTYtMTYgNDgtMTYtNDgtNDgtMTYgNDgtMTYgMTYtNDggMTYgNDh6bS0yNDMuOC05LjhsMzMgNjYuOSA3My44IDEwLjcgNTkuOCA4LjctNDMuMyA0Mi4yLTUzLjQgNTIuMSAxMi42IDczLjVMMzEzIDUxMmwtNTMuNS0yOC4xLTY2LTM0LjctNjYgMzQuN0w3My45IDUxMmwxMC4yLTU5LjYgMTIuNi03My41TDQzLjMgMzI2LjggMCAyODQuNmw1OS44LTguNyA3My44LTEwLjcgMzMtNjYuOUwxOTMuNSAxNDRsMjYuOCA1NC4yem0yNi4xIDExNC40bC0yNS0zLjYtMTEuMi0yMi42LTE2LjctMzMuOS0xNi43IDMzLjlMMTY1LjYgMzA5bC0yNSAzLjYtMzcuNCA1LjQgMjcuMSAyNi40IDE4LjEgMTcuNkwxNDQgMzg3bC02LjQgMzcuMyAzMy41LTE3LjYgMjIuMy0xMS43IDIyLjMgMTEuNyAzMy41IDE3LjZMMjQyLjkgMzg3bC00LjMtMjQuOSAxOC4xLTE3LjYgMjcuMS0yNi40LTM3LjQtNS40eiI+PC9wYXRoPjwvc3ZnPg==)
Shop Now!](/store){.btn .btn-md .btn-primary .btn-featured}


-    [English]{.caption .d-none .d-lg-inline-block}

    
    [English](https://refactoring.guru/design-patterns/iterator "English"){.dropdown-item
    .locale-link .active locale="en"}
    [Español](https://refactoring.guru/es/design-patterns/iterator "Español"){.dropdown-item
    .locale-link locale="es"}
    [Français](https://refactoring.guru/fr/design-patterns/iterator "Français"){.dropdown-item
    .locale-link locale="fr"}
    [日本語](https://refactoring.guru/ja/design-patterns/iterator "日本語"){.dropdown-item
    .locale-link locale="ja"}
    [한국어](https://refactoring.guru/ko/design-patterns/iterator "한국어"){.dropdown-item
    .locale-link locale="ko"}
    [Polski](https://refactoring.guru/pl/design-patterns/iterator "Polski"){.dropdown-item
    .locale-link locale="pl"} [Português
    Brasileiro](https://refactoring.guru/pt-br/design-patterns/iterator "Português Brasileiro"){.dropdown-item
    .locale-link locale="pt-br"}
    [Русский](https://refactoring.guru/ru/design-patterns/iterator "Русский"){.dropdown-item
    .locale-link locale="ru"}
    [Українська](https://refactoring.guru/uk/design-patterns/iterator "Українська"){.dropdown-item
    .locale-link locale="uk"}
    [中文](https://refactoringguru.cn/design-patterns/iterator "中文"){.dropdown-item
    .locale-link locale="zh"}
    
-   [ [Contact us]{.caption .d-none
    .d-xl-inline-block}](https://feedback.refactoring.guru/?show_feedback_form_private=true "Contact us"){.userecho-private
    rel="nofollow"}
-   [ [Log in]{.caption .d-none
    .d-xl-inline-block}](https://refactoring.guru/login "Log in")
-   






-   [Home](/)
-   [Refactoring](/refactoring)
-   [Design Patterns](/design-patterns)
-   [Premium Content](/store)
-   [Forum](https://refactoring.userecho.com/){.userecho-public
    rel="nofollow"}
-   [Contact us](https://refactoring.userecho.com/){.userecho-private
    rel="nofollow"}



-   [](https://www.facebook.com/refactoring.guru)
-   [](/sendy/form){rel="nofollow"}
-   [](https://github.com/RefactoringGuru)










2014-2023 [Refactoring.Guru](/). [All rights
reserved.]{style="white-space: nowrap"}\
Illustrations by [[Dmitry
Zhart]{style="white-space: nowrap"}](http://zhart.us/){rel="nofollow"}



-   [Terms & Conditions](/terms)
-   [Privacy Policy](/privacy-policy)
-   [Content Usage Policy](/content-usage-policy)
-   [About us](/site-about)






